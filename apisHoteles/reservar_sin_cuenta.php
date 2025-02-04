<?php
require_once 'cors.php';
require_once 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['nombre'], $data['email'], $data['telefono'], $data['habitacion_id'], $data['fechaInicio'], $data['fechaFin'], $data['totalReserva'])) {
    echo json_encode(['status' => 'error', 'message' => 'Datos incompletos']);
    exit;
}

try {
    // Insertar cliente en clientes_sin_cuenta
    $stmt = $conn->prepare("INSERT INTO clientes_sin_cuenta (nombre, correo, telefono) VALUES (:nombre, :correo, :telefono)");
    $stmt->execute([
        ':nombre' => $data['nombre'],
        ':correo' => $data['email'],
        ':telefono' => $data['telefono']
    ]);
    $cliente_id = $conn->lastInsertId();

    // Insertar reserva
    $stmt = $conn->prepare("INSERT INTO reservaciones (cliente_sin_cuenta_id, habitacion_id, fecha_inicio, fecha_fin, total_a_pagar) VALUES (:cliente_id, :habitacion_id, :fechaInicio, :fechaFin, :total)");
    $stmt->execute([
        ':cliente_id' => $cliente_id,
        ':habitacion_id' => $data['habitacion_id'],
        ':fechaInicio' => $data['fechaInicio'],
        ':fechaFin' => $data['fechaFin'],
        ':total' => $data['totalReserva']
    ]);

    echo json_encode(['status' => 'success', 'message' => 'Reserva realizada con éxito']);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Error en la base de datos: ' . $e->getMessage()]);
}
?>
