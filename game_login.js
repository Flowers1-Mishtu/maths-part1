player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

player1score = 0;
player2score = 0;

document.getElementById("player1name").innerHTML=player1+ ":";
document.getElementById("player2name").innerHTML=player2+ ":";

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("playerquestion").innerHTML=" Question Turn -" + player1;
document.getElementById("playeranswer").innerHTML=" Answer Turn -" + player2;

function send(){
   number1 = document.getElementById("number1").value;
   number2 = document.getElementById("number2").value;
   actual_ansswer = parseInt(number1)*parseInt(number2);
   question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
   input_box = "<br>Answer : <input type= 'text' id= 'input_check_box'>";
   check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button ";
   row= question_number + input_box + check_button;
   document.getElementById("output").innerHTML = row;
   document.getElementById("number1").value= "";
   document.getElementById("number2").value= "";

}
question_turn="player1";
answer_turn="player2";
function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
console.log(word,answer);

    if (answer== word){
        if(answer_turn == "player1")
        {
     player1score= player1score+1;
     document.getElementById("player1score").innerHTML=player1score;
        }
        else
        {
            player2score= player2score+1;
            document.getElementById("player2score").innerHTML=player2score;
               }
    }
    if (question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("playerquestion").innerHTML=" Question Turn -" + player2;
    }
    else{
        question_turn="player1";
        document.getElementById("playerquestion").innerHTML=" Question Turn -" + player1;
    }

    if (answer_turn=="player1")
    {
        answer_turn="player2";
        document.getElementById("playeranswer").innerHTML=" Answer Turn -" + player2;
    }
    else{
        answer_turn="player1";
        document.getElementById("playeranswer").innerHTML=" Answer Turn -" + player1;
    }
    document.getElementById("output").innerHTML=" ";
}