let box=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true; //player X,player Y
let patterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

box.forEach((box)=>{
    box.addEventListener("click",()=>{
    if (turn0){
        box.innerText="O";
        turn0=false;
    } else{
        box.innerText="X";
        turn0=true;
    }
     box.disabled=true;
     checkWinner();
});
});

const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = ()=>{
    for(pattern of patterns){
        let pos1Val=box[pattern[0]].innerText;
        let pos2Val=box[pattern[1]].innerText;
        let pos3Val=box[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};
const resetGame = ()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
const enableBoxes =()=>{
    for(let boxes of box){
        boxes.disabled=false;
        boxes.innerText="";
    }
};
const disableBoxes =()=>{
    for(let boxes of box){
        boxes.disabled=true;
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
