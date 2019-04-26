
$.ajax({
    type: "GET",
    url: "api/favoritesAPI.php",
    dataType: "json",
    data: { 
        "action": "keyword"
    },
     success: function(data, status) {
        $("#keywords").html("| ");
        data.forEach(function(keyword) {
            $("#keywords").append("<a href='#' class='test'>" + keyword.keyword + "</a> | ");
        })
    },
    complete: function(data,status) { //optional, used for debugging purposes
        // alert(status);
    }
}); //ajax 

$(document).on('click', '.test',function() {
    let keyword = $(this).html();
    $.ajax({
    type: "GET",
    url: "api/favoritesAPI.php",
    dataType: "json",
    data: { 
        "action": "favorites",
        "keyword": keyword
    },
     success: function(data, status) {
        //  $("#favoriteImages").html("");
         let row = 0;
         let htmlString = "";
        data.forEach(function(e) {
            if(row % 3 == 0) {
                htmlString += "<br/>";
            }
            htmlString +=   "<img class='favorite' src='img/favorite_on.png' width='30'>";
            htmlString += "<img class='image' src='" + e.imageURL + "' width='300' height='280'>";
            row++;
        })
        $("#favoriteImages").html(htmlString);
        
    },
    complete: function(data,status) { //optional, used for debugging purposes
        // alert(status);
    }
}); //ajax 
})

$("#favoriteImages").on("click", ".favorite", function() {
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