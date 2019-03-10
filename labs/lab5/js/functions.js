
var good = false;

$("#username1").on("change", function(){
    $.ajax({

        type: "GET",
        url: "api/checkUsername_text.php",
        data: { 
            "username": $("#username1").val()
        },
        success: function(data,status) {
            if(data == "Available"){
                good = true;
            }else{
                good = false;
            }
            $("#username1Error").html(data);
        },
        complete: function(data,status) { //optional, used for debugging purposes
            //alert(status);
        }
    
    });//ajax   
}); // username1

$("#username2").on("change", function(){
    $.ajax({

        type: "GET",
        url: "api/checkUsername_json.php",
        dataType: 'json',
        data: { 
            "username": $("#username2").val()
        },
        success: function(data,status) {
            if(data.available){
                good = true;
                $("#username2Error").html('Username is available').css('color', 'green');
            }else{
                good = false;
                $("#username2Error").html('Username is already TAKEN').css('color', 'red');
            }
        },
        complete: function(data,status) { //optional, used for debugging purposes
            //alert(status);
        }
    
    });//ajax   
}); // username1

$("#password").on("click", function(){
    $.ajax({
        
        type: "GET",
        url: "api/strongPasswordAPI.php",
        dataType: 'json',
        data: { 
            "length": 10
        },
        success: function(data,status) {
            $("#passwordError").html(data.suggestedPwd);
        },
        complete: function(data,status) { //optional, used for debugging purposes
            //alert(status);
        }
        
    });//ajax   
}); // password

$("#password").on("change", function(){
    $.ajax({
        
        type: "GET",
        url: "api/validatePwd.php",
        dataType: 'json',
        data: { 
            "password": $("#password").val(),
            "username": $("#username1").val()
        },
        success: function(data,status) {
            $("#passwordError").css('color', 'black');
            if(!data.validPwd){
                good = false;
                $("#passwordError").html("Invalid Username").css('color', 'red');
            }else{
                good = true;
            }
        },
        complete: function(data,status) { //optional, used for debugging purposes
            //alert(status);
        }
        
    });//ajax   
}); // password

$("#submit").on('click', function() {
    if(good){
        $("#submit").attr('class', 'btn btn-success');
    }else{
        $("#submit").attr('class', 'btn btn-danger');
    }
});