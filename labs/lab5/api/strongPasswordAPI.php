<?php
    // echo "topS3cr3t";
    
    $lettersArray = range("a", "z");
    $password = "";
    
    for($i = 0; $i < $_GET['length']; $i++){
        $randomIndex = rand(0, 25);
        $password .= $lettersArray[$randomIndex];
    }
    
    $password[0] = rand(0,9);
    $password = str_shuffle($password);
    
    $data = array();
    $data['suggestedPwd'] = $password;
    echo json_encode($data);
?>