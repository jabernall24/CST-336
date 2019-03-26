<?php
    include "../../../dbConnection.php";
    
    $conn = getDatabaseConnection("midterm_practice");
    
    $sql = "SELECT * FROM mp_product";
    
    $stmt = $conn -> prepare($sql);
    $stmt->execute();
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($data);
?>