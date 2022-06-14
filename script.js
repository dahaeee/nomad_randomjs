const generateNum = document.querySelector("#generatenum");
const inputNum = document.querySelector("#inputnum");
const submit = document.querySelector("#submit");
const choseNum = document.querySelector("#chosenum");
const result = document.querySelector("#result");
const HIDDEN_CLASSNAME = "hidden";

function printResult(input, random) {
    if (input === random) {
        result.classList.remove(HIDDEN_CLASSNAME);
        result.innerText = "You won!";
    } else {
        result.classList.remove(HIDDEN_CLASSNAME);
        result.innerText = "You lost!";
    }
}

function guessNum(event) {
    event.preventDefault();
    choseNum.classList.remove(HIDDEN_CLASSNAME);
    const randomNumber = Math.floor(
      Math.random() * (Number(generateNum.value) + 1)
    );
    choseNum.innerText = `You chose: ${inputNum.value}, the machine chose: ${randomNumber}`;
    printResult(Number(inputNum.value), Number(randomNumber.value));
}

submit.addEventListener("click", guessNum);
