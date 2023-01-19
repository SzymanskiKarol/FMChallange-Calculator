const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const deleteButton = document.querySelector(".del-btn");
const resultButton = document.querySelector(".result-btn");
const resetButton = document.querySelector(".reset-btn");
let resultNumber = document.getElementById("result");
let firstNumber = document.getElementById("first-number");
let mathSign = document.getElementById("math-sign");

let result = '';

// Functions
function displayNumbers() {
    if (this.textContent === '.' && resultNumber.innerHTML.includes('.')) return;
    if (this.textContent === '.' && resultNumber.innerHTML === '') return resultNumber.innerHTML = '0.'

    resultNumber.innerHTML += this.textContent;
}

function operate() {
    if (resultNumber.innerHTML === '' && this.textContent === '-') {
        resultNumber.innerHTML = '-';
        return;
    }
    else if (resultNumber.innerHTML === '') {
        return;
    }

    if (mathSign.innerHTML !== '') {
        showResult();
    }
    firstNumber.innerHTML = resultNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    resultNumber.innerHTML = '';
}

function strip(number) {
    return (parseFloat(number.toPrecision(12)));
}

function showResult() {
    if (firstNumber.innerHTML === '' || resultNumber.innerHTML === '') return;

    let a = Number(resultNumber.innerHTML);
    let b = Number(firstNumber.innerHTML);
    let operator = mathSign.innerHTML;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = b - a;
            break;
        case 'x':
            result = a * b;
            break;
        case '/':
            result = b / a;
            break;
    }

    resultNumber.innerHTML = strip(result);
    firstNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

function deleteLast() {
    resultNumber.innerHTML = resultNumber.innerHTML.toString().slice(0, -1);
}

function resetScreen() {
    result = '';
    firstNumber.innerHTML = '';
    resultNumber.innerText = '';
    mathSign.innerText = '';
}

// Event Listeners
numberButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
});

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', operate)
});

deleteButton.addEventListener('click', deleteLast);
resultButton.addEventListener('click', showResult);
resetButton.addEventListener('click', resetScreen);






// THEME TOGGLE
const themeBtn = document.querySelector(".theme-btn");
const themeHtml = document.querySelector("html");

themeBtn.addEventListener('click', () => {
    if (themeBtn.classList.contains("theme-1")) {
        themeBtn.classList.remove("theme-1");
        themeBtn.classList.add("theme-2");
        themeHtml.setAttribute("data-theme", "theme-2");
    } else if (themeBtn.classList.contains("theme-2")) {
        themeBtn.classList.remove("theme-2");
        themeBtn.classList.add("theme-3");
        themeHtml.setAttribute("data-theme", "theme-3");
    } else if (themeBtn.classList.contains("theme-3")) {
        themeBtn.classList.remove("theme-3");
        themeBtn.classList.add("theme-1");
        themeHtml.setAttribute("data-theme", "theme-1");
    }
})

