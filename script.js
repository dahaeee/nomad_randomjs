const generateNum = document.querySelector("#generatenum");
const inputNum = document.querySelector("#inputnum");
const submit = document.querySelector("#submit");
const choseNum = document.querySelector("#chosenum");
const result = document.querySelector("#result");
const HIDDEN_CLASSNAME = "hidden";

function printResult(input, random) {
    if (parseInt(input) === parseInt(random)) {
        result.classList.remove(HIDDEN_CLASSNAME);
        result.innerText = "You won!😆";
    } else {
        result.classList.remove(HIDDEN_CLASSNAME);
        result.innerText = "You lost!😞";
    }
}

function guessNum(event) {
    event.preventDefault();
    choseNum.classList.remove(HIDDEN_CLASSNAME);
    const randomNumber = Math.floor(
      Math.random() * (Number(generateNum.value) + 1)
    );
    choseNum.innerText = `You chose: ${inputNum.value}, The machine chose: ${randomNumber}`;
    printResult(Number(inputNum.value), Number(randomNumber.value));
}

submit.addEventListener("click", guessNum);



// const generateNumber = document.querySelector("#generate-number");
// const guessNumber = document.querySelector("#guess-number");
// const playbtn = document.querySelector("#play");
// const resultText = document.querySelector(".result span");
// const resultWin = document.querySelector(".result h3");
// const NUMBERKEY = "machine number";
// const USERNUMBERKEY = "user number";

// function updateNumber() {
//     const currentNumber = Math.ceil(Math.random() * generateNumber.value);
//     const userNumber = guessNumber.value;
//     localStorage.setItem(NUMBERKEY, currentNumber);
//     localStorage.setItem(USERNUMBERKEY, userNumber);
// }

// setInterval(updateNumber, 500);

// function printGameText(e) {
//     e.preventDefault();
//     let yourNumber = localStorage.getItem(USERNUMBERKEY);
//     let pageNumber = localStorage.getItem(NUMBERKEY);
//     resultText.innerText = `You chose: ${yourNumber}, the machine chose: ${pageNumber}`;

//     if (yourNumber === pageNumber) {
//         resultWin.innerText = "You won!";
//     } else {
//         resultWin.innerText = "You lost!";
//     }
// }

// playbtn.addEventListener("click", printGameText);

