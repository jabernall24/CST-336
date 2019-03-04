  //This AJAX call returns a number of "likes" and "dislikes"
  //Enter a YouTube video id for "data".

$.ajax({
    type: "get",
    url:  "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php",
    dataType: "json",
    data: {
        "videoId": "liJVSwOiiwg" 
    },  //   <----AS THE VALUE, ENTER THE YOUTUBE VIDEO ID
    
    success: function(data,status) {
            $("#likes").html(data.likes);
            $("#dislikes").html(data.dislikes);
      },
      complete: function(data,status) { 
          //alert(status);
      }
});


function updateValues(value){
     $.ajax({
        type: "get",
        url:  "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php",
        dataType: "json",
        data: {
            "videoId": "liJVSwOiiwg",
            "action": value
        },  //   <----AS THE VALUE, ENTER THE YOUTUBE VIDEO ID
        
        success: function(data,status) {
            if(value == "comments"){
                $("#comments").html('');
                for(let i = 0; i < data.length; i++){
                    $("#theComments").append(data[i]['author'] + ' ');
                    $("#theComments").append(data[i]['date'] + '<br>');
                    $("#theComments").append(data[i]['comment'] + '<br><br>');
                }
            }
            $("#likes").html(data.likes);
            $("#dislikes").html(data.dislikes);
          },
          complete: function(data,status) { 
              //alert(status);
          }
    });
}


$("#like").on('click', function(){
   
    if($("#like").html() == '<img src="img/cancel_like.png" alt="Like button" width="35">'){
        $("#like").html('<img src="img/like.png" alt="Like button" width="35">')
        // update number of likes
        updateValues('like')
    }else{
        $("#like").html('<img src="img/cancel_like.png" alt="Like button" width="35">')
        updateValues('cancel_like')
    }

});

$("#dislike").on('click', function(){
    if($("#dislike").html() == '<img src="img/cancel_dislike.png" alt="Dislike button" width="35">'){
        $("#dislike").html('<img src="img/dislike.png" alt="Dislike button" width="35">')
        // update number of likes
    updateValues('dislike')

    }else{
        $("#dislike").html('<img src="img/cancel_dislike.png" alt="Dislike button" width="35">')
        updateValues('cancel_dislike')
    }
});

$("#comments").on('click', function(){
    updateValues("comments");
});