<?php
require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $usuario = verificarToken(); 

    try {
        $stmt = $conn->prepare(
            "SELECT 
                r.id as reservacion_id, 
                h.numero_habitacion, 
                t.nombre as tipo_habitacion, 
                t.capacidad, 
                t.camas, 
                h.precio, 
                r.fecha_inicio, 
                r.fecha_fin, 
                r.estado,
                u.nombre as nombre_usuario, 
                ho.nombre as nombre_hotel, 
                lt.nombre as nombre_lugar_turistico,
                r.total_a_pagar, 
                r.cliente_sin_cuenta_id
            FROM reservaciones r
            INNER JOIN habitaciones h ON r.habitacion_id = h.id
            INNER JOIN tipos_habitacion t ON h.tipo_habitacion_id = t.id
            LEFT JOIN usuarios u ON r.usuario_id = u.id
            INNER JOIN hoteles ho ON h.hotel_id = ho.id
            INNER JOIN lugares_turisticos lt ON ho.lugar_id = lt.id"
        );
        $stmt->execute();
        $reservaciones = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([
            "status" => "success",
            "data" => $reservaciones
        ]);
    } catch (PDOException $e) {
        echo json_encode([
            "status" => "error",
            "message" => "Error al obtener las reservaciones: " . $e->getMessage()
        ]);
    }
}
