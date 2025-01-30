<?php
require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $usuario = verificarToken(); 

    if (!isset($_GET['hotel_id'])) {
        echo json_encode([
            "status" => "error",
            "message" => "Se requiere el parámetro hotel_id"
        ]);
        exit;
    }

    $hotel_id = intval($_GET['hotel_id']);

    try {
        $stmt = $conn->prepare("SELECT h.id, h.numero_habitacion, h.precio, h.disponibilidad, t.nombre AS tipo, t.capacidad, t.camas FROM habitaciones h INNER JOIN tipos_habitacion t ON h.tipo_habitacion_id = t.id WHERE h.hotel_id = :hotel_id");
        $stmt->bindParam(':hotel_id', $hotel_id, PDO::PARAM_INT);
        $stmt->execute();
        $habitaciones = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([
            "status" => "success",
            "data" => $habitaciones
        ]);
    } catch (PDOException $e) {
        echo json_encode([
            "status" => "error",
            "message" => "Error al obtener las habitaciones: " . $e->getMessage()
        ]);
    }
}
?>
