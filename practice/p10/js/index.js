$("#submit").click( function(){ 
    var points = 0;

    var one = $("input[name=one]:checked").val();
    var two = $("input[name=two]:checked").val();
    
    if(one =="otter"){
        points = points+5;
    }
    if(two == "1994"){
         points = points+5;
    }

    $.ajax({
        type: "get",
        url: "api/checkAnswer.php",
        dataType: "json",
        data: { 
            "email": $("#email").val(),
            "score": points
        },
        success: function(data,status) {
            $("#preScore").html(data["score"]);
            $("#taken").html(data["taken"]);
        },
        complete: function(data,status) { //optional, used for debugging purposes
            // alert(status);
        }
    });//AJAX  
       
});