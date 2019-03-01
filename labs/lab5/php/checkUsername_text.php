<?php
    
    $username = array("eeny", "meeny");
    $username[] = "miny";
    array_push($username, "maria", "john");
    
    // print_r($username) <== see elements in $username array
    
    if(in_array(strtolower($_GET['username']), $username)){
        echo "Not Available";
    }else{
        echo "Available";
    }

?>