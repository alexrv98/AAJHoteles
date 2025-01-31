<?php
require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = verificarToken();

    if (!$usuario) {
        echo json_encode(["status" => "error", "message" => "No autorizado"]);
        exit;
    }

    $usuario_id = isset($usuario['id']) ? $usuario['id'] : null;

    if (!$usuario_id) {
        echo json_encode(["status" => "error", "message" => "ID de usuario no válido"]);
        exit;
    }

    // Validar si los datos necesarios están presentes
    if (empty($data->habitacion_id) || empty($data->fecha_inicio) || empty($data->fecha_fin)) {
        echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
        exit;
    }

    $habitacion_id = filter_var($data->habitacion_id, FILTER_VALIDATE_INT);
    // Aquí no modificamos las fechas, se usa tal cual las recibimos
    $fecha_inicio = $data->fecha_inicio; // Usar la fecha con la hora tal como viene
    $fecha_fin = $data->fecha_fin; // Usar la fecha con la hora tal como viene

    if (!$habitacion_id) {
        echo json_encode(["status" => "error", "message" => "Datos inválidos"]);
        exit;
    }

    try {
        // Verificar si la habitación ya está reservada en el rango de fechas
        $stmt = $conn->prepare("
            SELECT COUNT(*) FROM reservaciones
            WHERE habitacion_id = :habitacion_id
            AND estado = 'confirmada'
            AND (
                (fecha_inicio BETWEEN :fecha_inicio AND :fecha_fin) OR
                (fecha_fin BETWEEN :fecha_inicio AND :fecha_fin) OR
                (:fecha_inicio BETWEEN fecha_inicio AND fecha_fin)
            )
        ");
        $stmt->bindParam(':habitacion_id', $habitacion_id);
        $stmt->bindParam(':fecha_inicio', $fecha_inicio);
        $stmt->bindParam(':fecha_fin', $fecha_fin);
        $stmt->execute();
        $existe = $stmt->fetchColumn();

        if ($existe > 0) {
            echo json_encode(["status" => "error", "message" => "La habitación ya está reservada en esas fechas"]);
            exit;
        }

        // Insertar la reserva con fecha_inicio y fecha_fin
        $estado = 'pendiente';
        $stmt = $conn->prepare("
            INSERT INTO reservaciones (usuario_id, habitacion_id, fecha_inicio, fecha_fin, estado)
            VALUES (:usuario_id, :habitacion_id, :fecha_inicio, :fecha_fin, :estado)
        ");
        $stmt->bindParam(':usuario_id', $usuario_id);
        $stmt->bindParam(':habitacion_id', $habitacion_id);
        $stmt->bindParam(':fecha_inicio', $fecha_inicio);
        $stmt->bindParam(':fecha_fin', $fecha_fin);
        $stmt->bindParam(':estado', $estado);
        $stmt->execute();

        echo json_encode(["status" => "success", "message" => "Reserva realizada con éxito"]);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Error al hacer la reserva: " . $e->getMessage()]);
    }
}
?>
