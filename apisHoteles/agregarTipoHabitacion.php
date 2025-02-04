<?php
require_once 'cors.php';
require_once 'db.php';
require_once 'jwt_verify.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = verificarToken(); 

    $data = json_decode(file_get_contents("php://input"));

    if (!isset($data->nombre) || !isset($data->capacidad) || !isset($data->camas)) {
        echo json_encode([
            "status" => "error",
            "message" => "Faltan datos necesarios."
        ]);
        exit();
    }

    try {
        $stmt = $conn->prepare("INSERT INTO tipos_habitacion (nombre, capacidad, camas) VALUES (:nombre, :capacidad, :camas)");
        $stmt->bindParam(':nombre', $data->nombre);
        $stmt->bindParam(':capacidad', $data->capacidad);
        $stmt->bindParam(':camas', $data->camas);

        $stmt->execute();
        echo json_encode([
            "status" => "success",
            "message" => "Tipo de habitación agregado correctamente."
        ]);
    } catch (PDOException $e) {
        echo json_encode([
            "status" => "error",
            "message" => "Error al agregar el tipo de habitación: " . $e->getMessage()
        ]);
    }
}
?>
