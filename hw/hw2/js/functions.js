
var q1_answer = "Los Angeles";
var q2_answer = "kobe bryant";
var q3_answer = "logo3";
var q5_answer = "minneapolis";
var q6_answer = "16";
var q7_answer = "1949";
var q8_answer = "Elgin Baylor";
var q9_answer = "16";

var q3_response = "";
var q3_selected = false;

var correct_points = 10;
var total = 0;

$("#submitButton").on("click", function(){
    total = 0;
    $("#validSubmission").html("");
    
    if(!validateQuestions()){
        return;
    }
    
    let q1_response = $("input[name=q1]:checked").val();
    let q2_response = $("#q2").val().toLowerCase();
    let q5_response = $("#q5").val().toLowerCase();
    let q6_response = $("#q6").val();
    let q7_response = $("#q7").val();
    let q8_response = $("#q8").val();
    let q9_response = $("#q9").val();

    // Question 1
    if(q1_response == q1_answer){
        $("#q1_feedback").html("Correct!").attr("class", "correct");
        $("#q1_mark").html("<img src='img/lakers_50.png' alt='checkmark'>");
        total += correct_points;
    }else{
        $("#q1_feedback").html("Incorrect").attr("class", "incorrect");
        $("#q1_mark").html("<img src='img/celtics.jpg' alt='checkmark'>");
    }
    
    // Question 2
    if(q2_response == q2_answer){
        $("#q2_feedback").html("Correct!").attr("class", "correct");
        $("#q2_mark").html("<img src='img/lakers_50.png' alt='checkmark'>");
        total += correct_points;
    }else{
        $("#q2_feedback").html("Incorrect").attr("class", "incorrect");
        $("#q2_mark").html("<img src='img/celtics.jpg' alt='checkmark'>");
    }
    
    
    // Question 3
    if(q3_answer == q3_response){
        $("#q3_feedback").html("Correct!").attr("class", "correct");
        $("#q3_mark").html("<img src='img/lakers_50.png' alt='checkmark'>");
        total += correct_points;
    }else{
        $("#q3_feedback").html("Incorrect").attr("class", "incorrect");
        $("#q3_mark").html("<img src='img/celtics.jpg' alt='checkmark'>");
    }
    
    
    // Question 4
    if($("#Kareem").is(":checked") && $("#Kobe").is(":checked") && $("#Cooper").is(":checked") && !$("#Shaq").is(":checked") && $("#Magic").is(":checked")){
        $("#q4_feedback").html("Correct!").attr("class", "correct");
        $("#q4_mark").html("<img src='img/lakers_50.png' alt='checkmark'>");
        total += correct_points;
    }else{
        $("#q4_feedback").html("Incorrect").attr("class", "incorrect");
        $("#q4_mark").html("<img src='img/celtics.jpg' alt='checkmark'>");
    }
    
    
    // Question 5
    if(q5_answer == q5_response){
        $("#q5_feedback").html("Correct!").attr("class", "correct");
        $("#q5_mark").html("<img src='img/lakers_50.png' alt='checkmark'>");
        total += correct_points;
    }else{
        $("#q5_feedback").html("Incorrect").attr("class", "incorrect");
        $("#q5_mark").html("<img src='img/celtics.jpg' alt='checkmark'>");
    }
    
    
    // Question 6
    if(q6_answer == q6_response){
        $("#q6_feedback").html("Correct!").attr("class", "correct");
        $("#q6_mark").html("<img src='img/lakers_50.png' alt='checkmark'>");
        total += correct_points;
    }else{
        $("#q6_feedback").html("Incorrect").attr("class", "incorrect");
        $("#q6_mark").html("<img src='img/celtics.jpg' alt='checkmark'>");
    }
    
    
    // Question 7
    if(q7_answer == q7_response){
        $("#q7_feedback").html("Correct!").attr("class", "correct");
        $("#q7_mark").html("<img src='img/lakers_50.png' alt='checkmark'>");
        total += correct_points;
    }else{
        $("#q7_feedback").html("Incorrect").attr("class", "incorrect");
        $("#q7_mark").html("<img src='img/celtics.jpg' alt='checkmark'>");
    }
    
    
    // Question 8
    if(q8_answer == q8_response){
        $("#q8_feedback").html("Correct!").attr("class", "correct");
        $("#q8_mark").html("<img src='img/lakers_50.png' alt='checkmark'>");
        total += correct_points;
    }else{
        $("#q8_feedback").html("Incorrect").attr("class", "incorrect");
        $("#q8_mark").html("<img src='img/celtics.jpg' alt='checkmark'>");
    }
    
    
    // Question 9
    if(q9_answer == q9_response){
        $("#q9_feedback").html("Correct!").attr("class", "correct");
        $("#q9_mark").html("<img src='img/lakers_50.png' alt='checkmark'>");
        total += correct_points;
    }else{
        $("#q9_feedback").html("Incorrect").attr("class", "incorrect");
        $("#q9_mark").html("<img src='img/celtics.jpg' alt='checkmark'>");
    }
    
    
    // Question 10
    if($("#8").is(":checked") && $("#24").is(":checked") && !$("#10").is(":checked") && !$("#23").is(":checked") && $("#52").is(":checked")){
        $("#q10_feedback").html("Correct!").attr("class", "correct");
        $("#q10_mark").html("<img src='img/lakers_50.png' alt='checkmark'>");
        total += correct_points;
    }else{
        $("#q10_feedback").html("Incorrect").attr("class", "incorrect");
        $("#q10_mark").html("<img src='img/celtics.jpg' alt='checkmark'>");
    }
    
    alert(total);
    if(total == 100){
        $("#score").html("Result:<br>You are a die hard Lakers fan, congrats on supporting the greatest franchise in the NBA.");
    }else if(total >= 80 && total < 100){
        $("#score").html("Result:<br>You are a true Lakers fan, congrats on supporting the greatest franchise in the NBA.");
    }else if(total >= 60 && total < 80){
        $("#score").html("Result:<br>You got some knowledge to learn about the Lakers. <a href='https://en.wikipedia.org/wiki/Los_Angeles_Lakers' >You can catch up here.</a>");
    }else if(total >= 40 && total < 60){
        $("#score").html("Result:<br>Are you sure you are a Lakers fan? <a href='https://en.wikipedia.org/wiki/Los_Angeles_Lakers' >If you are study.</a>");
    }else{
        $("#score").html("Result:<br>Get out of here, you are not a Lakers fan.");
    }
    
}); // startQuizButton

$(".q3_active").on("click", function(){
    $(".q3_active").css("background", "");
    $(this).css("background", "linear-gradient(to top right, #682784, gold)");
    q3_response = $(this).attr("id");
    q3_selected = true;
});

function validateQuestions(){
    let isValid = true;
    if($("input[name=q1]:checked").length == 0){
        $("#validSubmission").append("Question 1 must be answered<br>");
        isValid = false;
    }
    if($("#q2").val() == ""){
        $("#validSubmission").append("Question 2 must be answered<br>");
        isValid = false;
    }
    
    if(!q3_selected){
        $("#validSubmission").append("Question 3 must be answered<br>");
        isValid = false;
    }
    
    if(!$("#Kareem").is(":checked") && !$("#Kobe").is(":checked") && !$("#Cooper").is(":checked") && !$("#Shaq").is(":checked") && !$("#Magic").is(":checked")){
        $("#validSubmission").append("Question 4 must be answered<br>");
        isValid = false;
    }
    
    if($("#q5").val() == ""){
        $("#validSubmission").append("Question 5 must be answered<br>");
        isValid = false;
    }
    
    if($("#q6").val() == ""){
        $("#validSubmission").append("Question 6 must be answered<br>");
        isValid = false;
    }
    
    if($("#q7").val() == ""){
        $("#validSubmission").append("Question 7 must be answered<br>");
        isValid = false;
    }
    
    if($("#q8").val() == ""){
        $("#validSubmission").append("Question 8 must be answered<br>");
        isValid = false;
    }
    
    if($("#q9").val() == ""){
        $("#validSubmission").append("Question 9 must be answered<br>");
        isValid = false;
    }
    
    if(!$("#8").is(":checked") && !$("#24").is(":checked") && !$("#10").is(":checked") && !$("#23").is(":checked") && !$("#52").is(":checked")){
        $("#validSubmission").append("Question 10 must be answered<br>");
        isValid = false;
    }
    
    return isValid;
}