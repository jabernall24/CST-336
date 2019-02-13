
var q1_value = 25;
var q2_value = 25;
var q3_value = 25;

var q1_answer = "sacramento";
var q2_answer = "Missouri River";
var q3_answer = "Rhode Island";


$("#submitButton").on("click", function(){
    let total_points = 0;
    
    let q1_response = $("#q1").val().toLowerCase();
    let q2_response = $("#q2").val();
    let q3_response = $("input[name=q3]:checked").val();

    if(q1_response == q1_answer){
       $("#q1_feedback").html("Correct").css("color", "green");
       total_points += q1_value;
    }else{
       $("#q1_feedback").html("Incorrect").css("color", "red");
    }
    
    if(q2_response == q2_answer){
        $("#q2_feedback").html("Correct").css("color", "green");
        total_points += q2_value
    }else{
        $("#q2_feedback").html("Incorrect").css("color", "red");
    }
    
    if(q3_response == q3_answer){
        $("#q3_feedback").html("Correct").css("color", "green");
        total_points += q3_value;
    }else{
        $("#q3_feedback").html("Incorrect").css("color", "red");
    }
    
    $("#totalPoints").html("The total Score is: " + total_points);
});