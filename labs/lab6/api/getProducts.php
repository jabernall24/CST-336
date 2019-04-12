<?php

    include "../../../dbConnection.php";
    
    $conn = getDatabaseConnection("ottermart");
    
    // $sql = "SELECT * FROM om_product ORDER BY productPrice LIMIT 19";
    $sql = "SELECT * FROM om_product ORDER BY productID DESC LIMIT 17";
    $stmt = $conn -> prepare($sql);  //$connection MUST be previously initialized
    $stmt->execute();
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC); //use fetch for one record, fetchAll for multiple
    
    echo json_encode($records);

?>