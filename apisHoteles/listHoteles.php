<?php
require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    if (!isset($_GET['lugar_id'])) {
        echo json_encode([
            "status" => "error",
            "message" => "Se requiere el parámetro lugar_id"
        ]);
        exit;
    }

    $lugar_id = intval($_GET['lugar_id']);

    try {
        $stmt = $conn->prepare("SELECT id, nombre, descripcion, lugar_id, direccion, telefono, imagenes FROM hoteles WHERE lugar_id = :lugar_id");
        $stmt->bindParam(':lugar_id', $lugar_id, PDO::PARAM_INT);
        $stmt->execute();
        $hoteles = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([
            "status" => "success",
            "data" => $hoteles
                ]);
    } catch (PDOException $e) {
        echo json_encode([
            "status" => "error",
            "message" => "Error al obtener los hoteles: " . $e->getMessage()
        ]);
    }
}
?>
