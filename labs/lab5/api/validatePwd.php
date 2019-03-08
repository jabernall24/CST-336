<?php
    // Validate that the user name is NOT contained in the password
    
    $username = $_GET['username'];
    $password = $_GET['password'];
    
    $data = array();
    
    if(stripos($password, $username) !== false){
        $data["validPwd"] = false;
    }else{
        $data["validPwd"] = true;
    }
    
    echo json_encode($data);
?>
