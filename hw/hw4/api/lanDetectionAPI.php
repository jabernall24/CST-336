<?php

    $message = $_GET['message'];

    $curl = curl_init();
        curl_setopt_array($curl, array(
        CURLOPT_URL => "https://ws.detectlanguage.com/0.2/detect?key=5823d17a6470ff7b6f07556853518f93&q=$message",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_HTTPHEADER => array(
        "cache-control: no-cache"
        ),
     ));
    
    $jsonData = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);
    
    $data = json_decode($jsonData, true);

    $r = array();
    $r['code'] = $data['data']['detections'][0]['language'];
    $r['isReliable'] = $data['data']['detections'][0]['isReliable'];
    $r['confidence'] = $data['data']['detections'][0]['confidence'];
    $r['language'] = null;
    $r['text'] = $message;
    
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
    
    forEach($lan as $key => $value) {
        if($value['code'] === $r['code']) {
            $r['language'] = $value['name'];
        }
    }
    
    
    echo json_encode($r);
?>