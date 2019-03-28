<?php
    
    $team = $_GET['team'];
    // echo $team;
    $players = array();

    $players["lakers"] = array("LeBron James", "Brandon Ingram", "Lonzo Ball", "Kyle Kuzma", "Javale McGee");
    $players["celtics"] = array("Kyrie Irving", "Marcus Smart", "Jayson Tatum", "Marcus Mosrris", "Al Horford");
    
    if($team == "lakers") {
            echo json_encode($players["lakers"]);
    }
    


?>