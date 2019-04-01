
$.ajax({
        type: "GET",
        url: "api/teams.php",
        dataType: "json",
        success: function(data,status) {
            $("[names=teams]").html("");
            data.forEach(function(team){
                $("[name=teams]").append("<option>" + team +"</option>");
            });
        },
        complete: function(data,status) { //optional, used for debugging purposes
            // alert(status);
        }

    });//ajax


$("[name=userInput]").on('keyup', function(){
     $.ajax({
        type: "GET",
        url: "api/teams.php",
        dataType: "json",
        data: {
            "text": $("[name=userInput]").val()
        },
        success: function(data,status) {
            $('[name=teams]').children('option').remove();
            data.forEach(function(team){
                $("[name=teams]").append("<option>" + team +"</option>");
            });
        },
        complete: function(data,status) { //optional, used for debugging purposes
            // alert(status);
        }

    });//ajax
});

$("[name=teams]").on('change', function() {
    $.ajax({
        type: "GET",
        url: "api/starters.php",
        dataType: "json",
        data: {
            "team": $("[name=teams]").val()
        },
        success: function(data,status) {
            $("#starters").html("");
            data.forEach(function(player){
                $("#starters").append(player + "<br>");
            });
        },
        complete: function(data,status) { //optional, used for debugging purposes
            // alert(status);
        }
    });//ajax
})