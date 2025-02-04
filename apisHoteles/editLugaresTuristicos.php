<?php

require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $usuario = verificarToken(); 

    $data = json_decode(file_get_contents("php://input"));

    if (isset($data->id, $data->nombre, $data->descripcion, $data->ubicacion, $data->imagen)) {
        try {
            $stmt = $conn->prepare("UPDATE lugares_turisticos SET nombre = ?, descripcion = ?, ubicacion = ?, imagen = ? WHERE id = ?");
            $stmt->execute([$data->nombre, $data->descripcion, $data->ubicacion, $data->imagen, $data->id]);

            echo json_encode([
                "status" => "success",
                "message" => "Lugar actualizado correctamente"
            ]);
        } catch (PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => "Error al actualizar el lugar: " . $e->getMessage()
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Faltan datos para actualizar el lugar"
        ]);
    }
}
?>
