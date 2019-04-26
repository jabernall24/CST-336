    
function searchImage() {
    $("#images").html("Loading...");
    
    $.ajax({
        method: "GET",
        url: "api/pixabayProxy.php",
        dataType: "json",
            data: { 
                "keyword": $("#keyword").val()
            },
         success: function(data, status) {
            let htmlString = "";
            let i = 0;
            $("#images").html("");
            
            for (let rows=0; rows < 3; rows++) {
                htmlString += "<div class='row'>";
                
                for (let cols=0; cols < 3; cols++) {
                    htmlString +=   "<img class='favorite' src='img/favorite.png' width='30'>";
                    htmlString +=  "<img src='"+ data[i++]+"' width='300' height='280'>";
                }//for
                
                htmlString += "</div>";
            }//for
           
           $("#images").append(htmlString);
        }
    }); //ajax 
}//searchImage()

$("#images").on("click", ".favorite", function() {
    let keyword = $("#keyword").val();
    
    if($(this).attr('src') === 'img/favorite_on.png') {
        $(this).attr('src', 'img/favorite.png');
        
        // add image URL to db
        callFavoriteAPI("delete",  $(this).next().attr('src'), keyword);
    }else {
        $(this).attr('src', 'img/favorite_on.png');
        // remove image URL from db
        callFavoriteAPI("add",  $(this).next().attr('src'), keyword);
    }
    
});

function callFavoriteAPI(action, url, keyword) {
    $.ajax({
        method: "GET",
        url: "api/favoritesAPI.php",
        dataType: "json",
        data: { 
            "keyword": keyword,
            "action": action,
            "url": url
        },
         success: function(data, status) {
            // alert(data[0]);
        },
        complete: function(data,status) { //optional, used for debugging purposes
            // alert(status);
        }
    }); //ajax 
}