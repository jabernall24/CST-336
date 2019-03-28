<?php
    include '../../../dbConnection.php';
    
    $conn = getDatabaseConnection("ottermart");
    
    $product = $_GET['productName'];
    $category = $_GET['category'];
    $priceFrom = $_GET['priceFrom'];
    $priceTo = $_GET['priceTo'];
    $orderBy = $_GET['orderBy'];
    $namedParameters = array();

    // Works but allows SQL injection (because it is using single quotes)
    // $sql = "SELECT * FROM om_product WHERE productName LIKE '%$product%'";
    $sql = "SELECT * FROM om_product WHERE 1 "; // retrieves all records

    if(!empty($product)) {
        $sql .= "AND (productName LIKE :products OR productDescription LIKE :products) ";
        $namedParameters[":products"] = "%$product%";
    }
    
    if(!empty($category)) {
        // catId 6 for some reason does not wokr
        $sql .= "AND catId = :categoryId ";
        $namedParameters[":categoryId"] = $category;
    }
    
    if(!empty($priceFrom) && !empty($priceTo)) {
        $sql .= "AND productPrice BETWEEN :lower AND :upper ";
        $namedParameters[":lower"] = $priceFrom;
        $namedParameters[":upper"] = $priceTo;
    }
    
    if($orderBy == "productPrice") {
        $sql .= "ORDER BY productPrice ";
    }else if($orderBy == "productName"){
        // this will only work combined with other parameters
        $sql .= "ORDER BY productName ";
    }
    
   // If I put limit >= 30 or no limit at all the query does not work
    $sql .= "LIMIT 29;";

    $stmt = $conn -> prepare($sql);  //$connection MUST be previously initialized
    $stmt->execute($namedParameters);
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC); //use fetch for one record, fetchAll for multiple

    echo json_encode($records);
?>