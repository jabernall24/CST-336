<?php

    include "../../../dbConnection.php";
    
    $conn = getDatabaseConnection('c9');
    
    $action = $_GET["action"];
    $url = $_GET["url"];
    $keyword = $_GET["keyword"];
    $nm = array();
    
    $d=mktime(11, 14, 54, 8, 12, 2014);
    $date = date("Y-m-d h:i:sa", $d);

    switch($action) {
        case "add":
            if($url == "null") {
                $nm[":url"] = "0";
            }else {
                $nm[":url"] = $url;
            }
            $sql = "INSERT INTO lab8_pixabay (imageURL, keyword, timestamp) VALUES (:url, :keyword, :timestamp);";
            $nm[":keyword"] = $keyword;
            $nm[":timestamp"] = $date;
            break;
        case "delete":
            if($url == "null") {
                $nm[":url"] = "0";
            }else {
                $nm[":url"] = $url;
            }
            $sql = "DELETE FROM lab8_pixabay WHERE lab8_pixabay.imageURL = :url;";
            break;
        case "keyword":
            $sql = "SELECT DISTINCT keyword FROM lab8_pixabay;";
            break;    
        case "favorites":
            $sql = "SELECT * FROM lab8_pixabay WHERE lab8_pixabay.keyword = :keyword;";
            $nm[":keyword"] = $keyword;
            break;
        default:
            exit();
    }
    
    $stmt = $conn->prepare($sql);
    $stmt->execute($nm);
    $record = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($record);
?>