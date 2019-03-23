<?php

    include "../../../dbConnection.php";
    
    $conn = getDatabaseConnection("ottermart");
    
    $sql = "SELECT catId, catName FROM om_category ORDER BY catName";
    $stmt = $conn -> prepare($sql);  //$connection MUST be previously initialized
    $stmt->execute();
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC); //use fetch for one record, fetchAll for multiple
    
    echo json_encode($records);

?><?php

    include "../../../dbConnection.php";
    
    $conn = getDatabaseConnection("ottermart");
    
    $sql = "SELECT catId, catName FROM om_category ORDER BY catName";
    $stmt = $conn -> prepare($sql);  //$connection MUST be previously initialized
    $stmt->execute();
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC); //use fetch for one record, fetchAll for multiple
    
    echo json_encode($records);

?>