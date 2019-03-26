<?php
    include "../../../dbConnection.php";
    
    $conn = getDatabaseConnection("midterm_practice");
    
    $productId = $_GET['productId'];
    $sqlparameters = array();
    
    $sql = "SELECT * FROM mp_product WHERE productId = :product";
    $sqlparameters[":product"] = $productId;

    $stmt = $conn -> prepare($sql);
    $stmt->execute($sqlparameters);
    $data = $stmt->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode($data);
?>