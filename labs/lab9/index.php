<?php
     
    function displayImagesUploaded() {
        if(!empty($_FILES) && $_FILES["fileName"]["size"] <= 1000000) {
            move_uploaded_file($_FILES["fileName"]["tmp_name"], "gallery/" . $_FILES["fileName"]["name"]);
        }
     
        $images = scandir("gallery"); // returns all file names within that folder
        
        for($i = 2; $i < count($images); $i++) {
            
            echo "<a href='gallery/$images[$i]'  target='_blank'><img src='gallery/$images[$i]' width='100'/><a>";
        }
    }

?>

<!DOCTYPE html>
<html>
    <head>
        <title> Lab 9: File upload </title>
        
        <!--bootstrap-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        
        <link rel="stylesheet" href="css/index.css" type="text/css" />

    </head>
    <body>
        
        <div class='jumbotron'>
            <h1> File Upload </h1>
        </div>
        
        <form method="POST" enctype="multipart/form-data"> 
            Select file: <input type="file" name="fileName" /> <br />
            <button>Upload File!</button>
        </form>
        
        <h3> Images Uploaded: </h3>
        
        <?=displayImagesUploaded() ?>
    </body>
</html>