<?php
    include "../../../dbConnection.php";
    
    $conn = getDatabaseConnection("midterm_practice");
    
    $sql = "SELECT * FROM mp_codes";
    
    $stmt = $conn -> prepare($sql);
    $stmt->execute();
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    $code = $data[array_rand($data)];
    
    echo json_encode($code);
?>