<?php
    
    $userInput = $_GET['text'];
    
    $teams = array("lakers", "celtics", "warriors", "bulls", "spurs", "76ers", "pistons", 
    "heat", "knicks", "rockets","cavaliers", "hawks", "wizards", "thunder", "trail blazers", 
    "bucks", "mavericks", "kings", "suns", "jazz", "nets", "magic", "pacers", "clippers",
    "hornets", "nuggets", "timberwolves", "pelicans", "raptors", "grizzlies");
    $matchingTeams = array();

    if($userInput == ""){
        echo json_encode($teams);
    }else{
        for($i = 0; $i < sizeof($teams); $i++){
            if(strpos($teams[$i], strtolower($userInput)) !== false){
                $matchingTeams[] = $teams[$i];
            }
    }

        echo json_encode($matchingTeams);
    }

?>