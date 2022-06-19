const generateNum = document.querySelector("#generatenum");
const inputNum = document.querySelector("#inputnum");
const submit = document.querySelector("#submit");
const choseNum = document.querySelector("#chosenum");
const result = document.querySelector("#result");
const NUMBERKEY = "machine number";
const USERNUMBERKEY = "user number";

function updateNumber() {
    const currentNumber = Math.ceil(Math.random() * generateNum.value);
    const userNumber = inputNum.value;
    localStorage.setItem(NUMBERKEY, currentNumber);
    localStorage.setItem(USERNUMBERKEY, userNumber);
}

setInterval(updateNumber, 500);

function printGameText(e) {
    e.preventDefault();
    let yourNumber = localStorage.getItem(USERNUMBERKEY);
    let pageNumber = localStorage.getItem(NUMBERKEY);
    choseNum.innerText = `You chose: ${yourNumber}, the machine chose: ${pageNumber}`;

    if (yourNumber === pageNumber) {
        result.innerText = "You won!";
    } else {
        result.innerText = "You lost!";
    }
}

submit.addEventListener("click", printGameText);








