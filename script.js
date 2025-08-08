function getComputerChoice(){
    randomNum=parseInt( Math.random()*3);
    if(randomNum===0) return "Rock";
    if(randomNum===1) return "Paper";
    if(randomNum===2) return "Scissor";
    else return null;
}


function getUserChoice(){
    choice = prompt("Rock, Paper or Scissor");
    if(choice.toLowerCase() === "rock" || choice.toLowerCase() ===  "paper" ||choice.toLowerCase() === "scissor") return choice;
    else return Error("Please type rock, paper or scissor");


}
function compare(user,computer){
    if(user === computer) return 0 ;
    else if((user.toLowerCase() ==="rock" && computer.toLowerCase()==="scissor")||(user.toLowerCase() ==="scissor" && computer.toLowerCase()==="paper")||(user.toLowerCase() ==="paper" && computer.toLowerCase()==="rock") ) return 1;
    else return 2;
}


function mainLogic(){
    user_score = 0;
    computer_score=0;
    while(computer_score!==3 || user_score!==3){
        result =compare(getUserChoice(),getComputerChoice());
        if(result===0) console.log(`It's a tie.\nPlayer: ${user_score}\nAI: ${computer_score}`);
        else if(result ===1) {user_score++; console.log(`Player Wins.\nPlayer: ${user_score}\nAI: ${computer_score}`);}
        else {computer_score++;console.log(`AI Wins.\nPlayer: ${user_score}\nAI: ${computer_score}`);}
    }
}
mainLogic();