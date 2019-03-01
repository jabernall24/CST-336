
$("#zipCode").on("change", function(){
    $.ajax({
        type: "GET",
        url: "http://itcdland.csumb.edu/~milara/ajax/cityInfoByZip.php",
        dataType: "json",
        data: {
            "zip": $("#zipCode").val(),
        },
        success: function(data,status) {
            $("#city").html(data.city);
            $("#latitude").html(data.latitude);
            $("#longitude").html(data.longitude);
             $("#noZipCode").html('');
        },
        complete: function(data,status) { //optional, used for debugging purposes
            if(status == "error"){
                $("#noZipCode").html("Zip Code not found").css('color', 'red');
            }
        }

    });//ajax
}); //zipCode

$("#submitBtn").on("click", function(){
    let valid = true;
    $("#passwordError").html('');
    if ($("#userName").val().length < 4){
        $("#nameError").html("Invalid username").css('color', 'red');
        valid = false;
    }
    if($("#password").val().length < 6){
        $("#passwordError").html("Password needs to be at least 6 characters.");
        valid = false;
    }
    if($("#confirmPassword").val() != $("#password").val()){
        $("#passwordError").html("Retype password");
        valid = false;
    }
    if(valid){
        alert("Sign up was successful");
    }
}); //submitBtn

$("#userName").on("change", function() {
    $.ajax({
        type: "GET",
        url: "http://myspace.csumb.edu/~milara/ajax/username/usernameLookup.php",
        dataType: "json",
        data: {
            "username": $("#userName").val(),
        },
        success: function(data,status) {
            if (data.available == "false"){
                $("#nameError").html("Invalid username").css("color", "red");
            }else{
                $("#nameError").html("Valid username").css("color", "green");
            }
        },
        complete: function(data,status) { //optional, used for debugging purposes
            // alert(status);
        }

    });//ajax
}); // userName

$("#state").on("change", function(){
    $.ajax({
        type: "GET",
        url: "http://itcdland.csumb.edu/~milara/ajax/countyList.php",
        dataType: "json",
        data: {
            "state": $("#state").val(),
        },
        success: function(data,status) {
            $("#county").html("<option> Select One </option>");
            for(let i = 0; i < data.length; i++){
                $("#county").append("<option>" + data[i].county + "</option>");
            }
        },
        complete: function(data,status) { //optional, used for debugging purposes
            // alert(status);
        }

    });//ajax
}); // state