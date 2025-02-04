<?php
require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = verificarToken();  

    $data = json_decode(file_get_contents('php://input'), true);

    $nombre = isset($data['nombre']) ? $data['nombre'] : null;
    $descripcion = isset($data['descripcion']) ? $data['descripcion'] : null;
    $ubicacion = isset($data['ubicacion']) ? $data['ubicacion'] : null;
    $imagen = isset($data['imagen']) ? $data['imagen'] : null;
    $categoria_id = isset($data['categoria_id']) ? $data['categoria_id'] : null;


    if ($nombre && $descripcion && $ubicacion && $imagen) {
        try {
            $stmt = $conn->prepare("INSERT INTO lugares_turisticos (nombre, descripcion, ubicacion, imagen, categoria_id) VALUES (?, ?, ?, ?, ?)");
            $stmt->execute([$nombre, $descripcion, $ubicacion, $imagen,$categoria_id]);

            echo json_encode([
                "status" => "success",
                "message" => "Lugar agregado correctamente"
            ]);
        } catch (PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => "Error al agregar el lugar: " . $e->getMessage()
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Faltan datos para agregar el lugar"
        ]);
    }
}
?>
