<?php
require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = verificarToken();

    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['id'], $data['tipo_habitacion_id'], $data['numero_habitacion'], $data['precio'], $data['disponibilidad'])) {
        echo json_encode([
            "status" => "error",
            "message" => "Faltan datos requeridos"
        ]);
        exit;
    }

    $id = intval($data['id']);
    $tipo_habitacion_id = intval($data['tipo_habitacion_id']);
    $numero_habitacion = trim($data['numero_habitacion']);
    $precio = floatval($data['precio']);
    $disponibilidad = intval($data['disponibilidad']);

    try {
        $stmt = $conn->prepare("UPDATE habitaciones SET tipo_habitacion_id = :tipo_habitacion_id, numero_habitacion = :numero_habitacion, precio = :precio, disponibilidad = :disponibilidad WHERE id = :id");
        
        $stmt->bindParam(':tipo_habitacion_id', $tipo_habitacion_id, PDO::PARAM_INT);
        $stmt->bindParam(':numero_habitacion', $numero_habitacion, PDO::PARAM_STR);
        $stmt->bindParam(':precio', $precio, PDO::PARAM_STR);
        $stmt->bindParam(':disponibilidad', $disponibilidad, PDO::PARAM_INT);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);

        $stmt->execute();

        echo json_encode([
            "status" => "success",
            "message" => "Habitación actualizada correctamente"
        ]);
    } catch (PDOException $e) {
        echo json_encode([
            "status" => "error",
            "message" => "Error al actualizar la habitación: " . $e->getMessage()
        ]);
    }
}
?>
