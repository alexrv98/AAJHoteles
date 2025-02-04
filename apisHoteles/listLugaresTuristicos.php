<?php
require_once 'cors.php';
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $categoria_id = isset($_GET['categoria_id']) ? $_GET['categoria_id'] : null;

    try {
        if ($categoria_id) {
            // Filtrar por categoría
            $stmt = $conn->prepare("SELECT id, nombre, descripcion, ubicacion, imagen, categoria_id FROM lugares_turisticos WHERE categoria_id = :categoria_id");
            $stmt->bindParam(':categoria_id', $categoria_id, PDO::PARAM_INT);
        } else {
            // Obtener todos los lugares si no se especifica una categoría
            $stmt = $conn->prepare("SELECT id, nombre, descripcion, ubicacion, imagen, categoria_id FROM lugares_turisticos");
        }

        $stmt->execute();
        $lugares = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([
            "status" => "success",
            "data" => $lugares
        ]);
    } catch (PDOException $e) {
        echo json_encode([
            "status" => "error",
            "message" => "Error al obtener los lugares turísticos: " . $e->getMessage()
        ]);
    }
}
?>
