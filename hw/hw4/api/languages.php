<?php

    include '../../../dbConnection.php';
    
    $conn = getDatabaseConnection('c9');
    
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://ws.detectlanguage.com/0.2/languages",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
        "cache-control: no-cache"
        ),
     ));
    
    $jsonData = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);
    
    $lan = json_decode($jsonData, true);
    $records = array();
    
    forEach($lan as $key => $value) {
        $records[] = $value['name'];
    }
    
    echo json_encode($records);
    
?>