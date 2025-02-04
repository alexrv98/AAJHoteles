<?php
require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = verificarToken();  

    $data = json_decode(file_get_contents('php://input'), true);

    $nombre = isset($data['nombre']) ? $data['nombre'] : null;
    $descripcion = isset($data['descripcion']) ? $data['descripcion'] : null;
    $direccion = isset($data['direccion']) ? $data['direccion'] : null;
    $telefono = isset($data['telefono']) ? $data['telefono'] : null;
    $imagenes = isset($data['imagenes']) ? $data['imagenes'] : null;
    $lugar_id = isset($data['lugar_id']) ? $data['lugar_id'] : null;

    if ($nombre && $descripcion && $direccion && $lugar_id && $imagenes) {
        try {
            $stmt = $conn->prepare("INSERT INTO hoteles (nombre, descripcion, lugar_id, direccion, telefono, imagenes) VALUES (?, ?, ?, ?, ?, ?)");
            $stmt->execute([$nombre, $descripcion, $lugar_id, $direccion, $telefono, $imagenes]);

            echo json_encode([
                "status" => "success",
                "message" => "Hotel agregado correctamente"
            ]);
        } catch (PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => "Error al agregar el hotel: " . $e->getMessage()
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Faltan datos para agregar el hotel"
        ]);
    }
}
?>
