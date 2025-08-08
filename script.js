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



    console.log(getComputerChoice());
    console.log(getUserChoice());
