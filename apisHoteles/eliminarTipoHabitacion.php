<?php
require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $usuario = verificarToken();

    $data = json_decode(file_get_contents("php://input"));
    
    if (isset($data->id)) {
        $id = $data->id;

        try {
            $stmt = $conn->prepare("DELETE FROM tipos_habitacion WHERE id = :id");
            $stmt->bindParam(':id', $id);

            $stmt->execute();

            echo json_encode([
                "status" => "success",
                "message" => "Tipo de habitación eliminado correctamente"
            ]);
        } catch (PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => "Error al eliminar el tipo de habitación: " . $e->getMessage()
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "ID del tipo de habitación no proporcionado"
        ]);
    }
}
?>
