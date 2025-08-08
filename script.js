function getComputerChoice(){
    randomNum=parseInt( Math.random()*3);
    if(randomNum===0) return "Rock";
    if(randomNum===1) return "Paper";
    if(randomNum===2) return "Scissor";
    else return null;
}
