<?php
require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $usuario = verificarToken(); 

    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $uriParts = explode('/', $uri);
    $id = end($uriParts);

    if ($id) {
        try {
            $stmt = $conn->prepare("DELETE FROM lugares_turisticos WHERE id = ?");
            $stmt->execute([$id]);

            echo json_encode([
                "status" => "success",
                "message" => "Lugar eliminado correctamente"
            ]);
        } catch (PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => "Error al eliminar el lugar: " . $e->getMessage()
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "ID del lugar no proporcionado"
        ]);
    }
}
?>
