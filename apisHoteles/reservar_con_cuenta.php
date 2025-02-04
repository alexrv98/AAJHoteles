<?php
require_once 'cors.php';
require_once 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (
    !$data ||
    !isset($data['usuario_id']) ||
    !isset($data['habitacion_id']) ||
    !isset($data['fechaInicio']) ||
    !isset($data['fechaFin']) ||
    !isset($data['totalReserva'])
) {
    echo json_encode(['status' => 'error', 'message' => 'Datos incompletos']);
    exit;
}

$usuario_id = $data['usuario_id'];
$habitacion_id = $data['habitacion_id'];
$fechaInicio = $data['fechaInicio'];
$fechaFin = $data['fechaFin'];
$totalReserva = $data['totalReserva'];

try {
    $stmt = $conn->prepare("INSERT INTO reservaciones (usuario_id, habitacion_id, fecha_inicio, fecha_fin, total_a_pagar, estado) VALUES (:usuario_id, :habitacion_id, :fechaInicio, :fechaFin, :totalReserva, 'pendiente')");
    $stmt->execute([
        ':usuario_id' => $usuario_id,
        ':habitacion_id' => $habitacion_id,
        ':fechaInicio' => $fechaInicio,
        ':fechaFin' => $fechaFin,
        ':totalReserva' => $totalReserva
    ]);

    echo json_encode(['status' => 'success', 'message' => 'Reserva realizada con éxito']);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Error en la base de datos: ' . $e->getMessage()]);
}
?>
