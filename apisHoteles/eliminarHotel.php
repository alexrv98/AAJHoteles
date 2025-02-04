<?php
require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $usuario = verificarToken();
    $id = isset($_GET['id']) ? $_GET['id'] : null;

    if ($id) {
        try {
            $stmt = $conn->prepare("DELETE FROM hoteles WHERE id = ?");
            $stmt->execute([$id]);

            echo json_encode([
                "status" => "success",
                "message" => "Hotel eliminado correctamente"
            ]);
        } catch (PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => "Error al eliminar el hotel: " . $e->getMessage()
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "ID de hotel no proporcionado"
        ]);
    }
}
?>
