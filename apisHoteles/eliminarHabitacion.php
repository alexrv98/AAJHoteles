<?php
require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $usuario = verificarToken(); 
    $id = isset($_GET['id']) ? intval($_GET['id']) : null;

    if ($id) {
        try {
            $stmt = $conn->prepare("SELECT id FROM habitaciones WHERE id = ?");
            $stmt->execute([$id]);

            if ($stmt->rowCount() === 0) {
                echo json_encode([
                    "status" => "error",
                    "message" => "La habitación no existe"
                ]);
                exit;
            }

            $stmt = $conn->prepare("DELETE FROM habitaciones WHERE id = ?");
            $stmt->execute([$id]);

            echo json_encode([
                "status" => "success",
                "message" => "Habitación eliminada correctamente"
            ]);
        } catch (PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => "Error al eliminar la habitación: " . $e->getMessage()
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "ID de habitación no proporcionado"
        ]);
    }
}
?>
