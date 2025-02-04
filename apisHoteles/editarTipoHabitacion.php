<?php
require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $usuario = verificarToken(); 

    $data = json_decode(file_get_contents("php://input"));

    if (isset($data->id) && isset($data->nombre) && isset($data->capacidad) && isset($data->camas)) {
        try {
            $id = $data->id;
            $nombre = $data->nombre;
            $capacidad = $data->capacidad;
            $camas = $data->camas;

            $stmt = $conn->prepare("UPDATE tipos_habitacion SET nombre = :nombre, capacidad = :capacidad, camas = :camas WHERE id = :id");
            $stmt->bindParam(':id', $id);
            $stmt->bindParam(':nombre', $nombre);
            $stmt->bindParam(':capacidad', $capacidad);
            $stmt->bindParam(':camas', $camas);

            $stmt->execute();

            echo json_encode([
                "status" => "success",
                "message" => "Tipo de habitación actualizado correctamente"
            ]);
        } catch (PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => "Error al actualizar el tipo de habitación: " . $e->getMessage()
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Faltan datos para actualizar el tipo de habitación"
        ]);
    }
}
?>
