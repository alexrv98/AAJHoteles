// reservacion.php
<?php
require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (
        !isset($data->lugar_id) ||
        !isset($data->hotel_id) ||
        !isset($data->tipo_habitacion_id) ||
        !isset($data->habitacion_id)
    ) {
        echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
        exit;
    }

    $lugar_id = $data->lugar_id;
    $hotel_id = $data->hotel_id;
    $tipo_habitacion_id = $data->tipo_habitacion_id;
    $habitacion_id = $data->habitacion_id;

    try {
        $stmt = $conn->prepare("INSERT INTO reservaciones (lugar_id, hotel_id, tipo_habitacion_id, habitacion_id) VALUES (:lugar_id, :hotel_id, :tipo_habitacion_id, :habitacion_id)");
        $stmt->bindParam(':lugar_id', $lugar_id);
        $stmt->bindParam(':hotel_id', $hotel_id);
        $stmt->bindParam(':tipo_habitacion_id', $tipo_habitacion_id);
        $stmt->bindParam(':habitacion_id', $habitacion_id);
        $stmt->execute();

        echo json_encode(["status" => "success", "message" => "Reserva realizada con éxito"]);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Error al hacer la reserva: " . $e->getMessage()]);
    }
}
