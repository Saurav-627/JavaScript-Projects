let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = ()=>{
    //rock paper scissor
    let options = ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}
const drawGame = ()=>{
    msg.innerText="Game Was Draw Play Again";
    msg.style.backgroundColor="lightblue";
}
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
  const compChoice= genCompChoice();
  console.log("computer choice = ", compChoice);
  if(userChoice===compChoice){
   drawGame();
  }else{
    let userWin = true;
    if(userChoice==="rock"){
        //scissors paper
        userWin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        //rock scissors
        userWin=compChoice==="scissors"?false:true;
    }else{
        //rock paper
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});