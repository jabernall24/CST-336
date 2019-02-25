var questionBank = [
    "What player has scored the most points for the Lakers?",
    "two",
    "three",
    ];
var answerBank = ["Kobe Bryant"];
var questionsSelected = [];



$("#startQuizButton").on("click", function(){
    $("#startQuizButton").hide();
    for(let i = 1; i <= 3; i++){
        let index = generateNum();
        $("#q"+i).html(questionBank[index]);
    }
}); // startQuizButton


function generateNum(){
    let choice = Math.floor(Math.random() * 3);
    while(questionsSelected.includes(choice)){
        choice = Math.floor(Math.random() * 3);
    }
    questionsSelected.push(choice);
    return choice;
}