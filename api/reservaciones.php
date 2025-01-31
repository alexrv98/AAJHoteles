<?php
require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // **Obtener usuario_id desde el JWT**
    $usuario = verificarToken();

    if (!$usuario) {
        echo json_encode(["status" => "error", "message" => "No autorizado"]);
        exit;
    }

    // Verificar si la respuesta es un array y si tiene el campo 'id'
    $usuario_id = isset($usuario['id']) ? $usuario['id'] : null; // Cambiar según la estructura real

    if (!$usuario_id) {
        echo json_encode(["status" => "error", "message" => "ID de usuario no válido"]);
        exit;
    }

    // Validar si los datos necesarios están presentes
    if (empty($data->habitacion_id)) {
        echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
        exit;
    }

    $habitacion_id = filter_var($data->habitacion_id, FILTER_VALIDATE_INT);

    if (!$habitacion_id) {
        echo json_encode(["status" => "error", "message" => "Datos inválidos"]);
        exit;
    }

    try {
        // Verificar si la habitación ya está reservada
        $stmt = $conn->prepare("SELECT COUNT(*) FROM reservaciones WHERE habitacion_id = :habitacion_id AND estado = 'confirmada'");
        $stmt->bindParam(':habitacion_id', $habitacion_id);
        $stmt->execute();
        $existe = $stmt->fetchColumn();

        if ($existe > 0) {
            echo json_encode(["status" => "error", "message" => "La habitación ya está reservada"]);
            exit;
        }

        // Insertar la reserva con el usuario_id y el estado predeterminado
        $estado = 'pendiente';  // Estado por defecto
        $stmt = $conn->prepare("INSERT INTO reservaciones (usuario_id, habitacion_id, estado) VALUES (:usuario_id, :habitacion_id, :estado)");
        $stmt->bindParam(':usuario_id', $usuario_id);  // Usar el id del usuario autenticado
        $stmt->bindParam(':habitacion_id', $habitacion_id);
        $stmt->bindParam(':estado', $estado);
        $stmt->execute();

        echo json_encode(["status" => "success", "message" => "Reserva realizada con éxito"]);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Error al hacer la reserva: " . $e->getMessage()]);
    }
}
?>
