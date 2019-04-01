<?php
    
    $team = $_GET['team'];
    $players = array();

    $players["lakers"] = array("Lonzo Ball", "Brandon Ingram", "LeBron James", "Kyle Kuzma", "Javale McGee");
    $players["celtics"] = array("Kyrie Irving", "Marcus Smart", "Jayson Tatum", "Marcus Morris", "Al Horford");
    $players["nets"] = array("D'Angelo Russell", "Joe Harris", "Rodions Kurucs", "DeMarre Carroll", "Jarrett Allen");
    $players["knicks"] = array("Dennis Smith Jr.", "Allonzo Trier", "Kevin Knox", "Noah Vonleh", "DeAndre Jordan");
    $players["76ers"] = array("Ben Simmons", "JJ Redick", "Jimmy Butler", "Tobias Harris", "Joel Embiid");
    $players["raptors"] = array("Kyle Lowry", "Danny Green", "Kawhi Leonard", "Pascal Siakam", "Serge Ibaka");
    $players["bulls"] = array("Kriss Dunn", "Zach LaVine", "Otto Porter Jr.", "Lauri Markkanen", "Robin Lopez");
    $players["cavaliers"] = array("Collin Sexton", "Jordan Clarkson", "Cedi Osman", "Kevin Love", "Tristan Thompson");
    $players["pistons"] = array("Reggie Jackson", "Wayne Ellington", "Khyri Thomas", "Blake Griffin", "Andre Drummond");
    $players["pacers"] = array("Darren Collison", "Tyreke Evans", "Bojan Bogdanovic", "Thaddeus Young", "Myles Turner");
    $players["bucks"] = array("Eric Bledsoe", "Malcolm Brogdon", "Khris Middleton", "Giannis Antetokounmpo", "Brook Lopez");
    $players["hawks"] = array("Trae Young", "Kevin Huerter", "Taurean Prince", "John Collins", "Dewayne Dedmon");
    $players["hornets"] = array("Kemba Walker", "Jeremy Lamb", "Nicolas Batum", "Marvin Williams", "Willy Hernangomez");
    $players["heat"] = array("Justise Winslow", "Dion Waiters", "Josh Richardson", "James Johnson", "Bam Adebayo");
    $players["magic"] = array("D.J. Augustin", "Evan Fournier", "Jonathan Issac", "Aaron Gordon", "Nikola Vucevic");
    $players["wizards"] = array("John Wall", "Bradley Beal", "Trevor Ariza", "Bobby Portis", "Thomas Bryant");
    $players["nuggets"] = array("Jamal Murray", "Malik Beasley", "Torrey Craig", "Paul Millsap", "Nikola Jokic");
    $players["timberwolves"] = array("Jeff Teague", "Josh Okogie", "Andrew Wiggins", "Taj Gibson", "Karl-Anthony Towns");
    $players["thunder"] = array("Russell Westbrook", "Terrance Ferguson", "Paul George", "Jerami Grant", "Steven Adams");
    $players["trail blazers"] = array("Damian Lillard", "CJ McCollum", "Maurice Harkless", "Al-Farouq Aminu", "Enes Kanter");
    $players["jazz"] = array("Ricky Rubio", "Donovan Mitchell", "Joe Ingles", "Derrick Favors", "Rudy Gobert");
    $players["warriors"] = array("Stephen Curry", "Klay Thompson", "Kevin Durant", "Draymond Green", "DeMarcus Cousins");
    $players["clippers"] = array("Shai Gilgeous-Alexander", "Landry Shamet", "Patrick Beverley", "Danilo Gallinari", "Ivica Zubac");
    $players["suns"] = array("Tyler Johnson", "Devin Booker", "T.J. Warren", "Mikal Bridges", "Deandre Ayton");
    $players["kings"] = array("De'Aaron Fox", "Buddy Hield", "Harrison Barnes", "Nemanja Bjelica", "Willie Cauley-Stein");
    $players["mavericks"] = array("Jalen Brunson", "Tim Hardaway Jr.", "Luka Doncic", "Dorian Finney-Smith", "Maximilian Kleber");
    $players["rockets"] = array("Chris Paul", "James Harden", "Iman Shumpert", "PJ Tucker", "Clint Capela");
    $players["grizzlies"] = array("Mike Conley", "Avery Bradley", "Justin Holiday", "Jaren Jackson Jr.", "Jonas Valanciunas");
    $players["pelicans"] = array("Elfrid Payton", "E'Twaun Moore", "Darius Miller", "Julius Randle", "Anthony Davis");
    $players["spurs"] = array("Derrick White", "DeMar Derozan", "Bryn Forbes", "LaMarcus Aldridge", "Jakob Poeltl");
    
    echo json_encode($players[$team[0]]);
?>