<?php
    include '../../../dbConnection.php';
    
    $conn = getDatabaseConnection("ottermart");
    
    $product = $_GET['productName'];
    $namedParameters = array();

    // Works but allows SQL injection (because it is using single quotes)
    // $sql = "SELECT * FROM om_product WHERE productName LIKE '%$product%'";
    
    $sql = "SELECT * FROM om_product WHERE 1 "; // retrieves all records
    
    if(!empty($product)){
        $sql .= "AND productName LIKE :products";
        $namedParameters[":products"] = "%$product%";
    }

    
    $stmt = $conn -> prepare($sql);  //$connection MUST be previously initialized
    $stmt->execute($namedParameters);
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC); //use fetch for one record, fetchAll for multiple

    echo json_encode($records);
?>