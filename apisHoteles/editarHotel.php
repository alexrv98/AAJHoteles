<?php
require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $usuario = verificarToken();  

    $data = json_decode(file_get_contents('php://input'), true);

    $id = isset($data['id']) ? $data['id'] : null;
    $nombre = isset($data['nombre']) ? $data['nombre'] : null;
    $descripcion = isset($data['descripcion']) ? $data['descripcion'] : null;
    $direccion = isset($data['direccion']) ? $data['direccion'] : null;
    $telefono = isset($data['telefono']) ? $data['telefono'] : null;
    $imagenes = isset($data['imagenes']) ? $data['imagenes'] : null;
    $lugar_id = isset($data['lugar_id']) ? $data['lugar_id'] : null;

    if ($id && $nombre && $descripcion && $direccion && $telefono && $imagenes && $lugar_id) {
        try {
            $stmt = $conn->prepare("UPDATE hoteles SET nombre = ?, descripcion = ?, direccion = ?, telefono = ?, imagenes = ?, lugar_id = ? WHERE id = ?");
            $stmt->execute([$nombre, $descripcion, $direccion, $telefono, $imagenes, $lugar_id, $id]);

            echo json_encode([
                "status" => "success",
                "message" => "Hotel actualizado correctamente"
            ]);
        } catch (PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => "Error al actualizar el hotel: " . $e->getMessage()
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Faltan datos para actualizar el hotel"
        ]);
    }
}
?>
