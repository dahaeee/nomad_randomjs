const gameForm = document.querySelector(".gameform");
const userInput = document.querySelector(".userinput");
const gameInput = document.querySelector(".gameinput");
const userChoice = document.querySelector(".userchoice");
const chose = document.querySelector(".chose");
const result = document.querySelector(".result");

function resultText(myNum, randNum){
    chose.innerText=`You chose: ${myNum}, the machine chose ${randNum}`;
    myNum = parseInt(myNum);
    if (myNum > randNum){ 
        result.innerText=`You won!`;
    }
    else if(myNum < randNum){
        result.innerText=`You lose!`;
    }
    else if(myNum === randNum){
        result.innerText=`Drow!`;
    }
}

function makeRandNum(e){
    e.preventDefault();
    const myNum = gameInput.value;
    const maxValue = userInput.value;
    const randNum = Math.ceil(Math.random() * maxValue);

    resultText(myNum, randNum);
}

function handleInput(){
    const maxNumValue = userInput.value;

    userChoice.innerText = `${maxNumValue}`;
    gameForm.addEventListener("submit", makeRandNum);
}

function init(){
    userInput.oninput = handleInput;
}
init();