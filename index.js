let firstinput = document.querySelector('Calculator-input-first')
let secondinput = document.querySelector('Calculator-input-second')

letfirstValue = firstInput.value;
letsecondValue = secondInput.value;
let result = 0;

let buttonPlus = document.querySelector('.calculator-plus')
let buttonMinus = document.querySelector('.calculator-minus')
let buttonMultiply = document.querySelector('.calculator-multiply')
let buttonDivide = document.querySelector('.calculator-divide')
let buttonPercent = document.querySelector('.calculator-percent')
let buttonbutton = document.querySelector('.calculator-button')
let buttonEquals = document.querySelector('.calculator-equals')

buttonPlus.addEventListener('click', () => {
    let firstValue = firstInput.value;
    let secondInput = secondinput.value;
    result = Number(firstValue) + Number(secondValue);
})

buttonMinus.addEventListener('click', () => {
    let firstValue = firstInput.value;
    let secondInput = secondinput.value;
    result = Number(firstValue) - Number(secondValue);
})

buttonMultiply.addEventListener('click', () => {
    let firstValue = firstInput.value;
    let secondInput = secondinput.value;
    result = Number(firstValue) * Number(secondValue);
})

buttonDivide.addEventListener('click', () => {
    let firstValue = firstInput.value;
    let secondInput = secondinput.value;
    result = Number(firstValue) / Number(secondValue);
})

buttonPercent.addEventListener('click', () => {
    let firstValue = firstInput.value;
    let secondInput = secondinput.value;
    result = Number(firstValue) * Number(secondValue) / 100;
})

buttonbutton.addEventListener('click', () => {
    let firstValue = firstInput.value;
    let secondInput = secondinput.value;
    result = Number(firstValue) ^ Number(secondValue);
})

switch (calculator-results) {
    case 'result = Number(firstValue) + Number(secondValue)':
    case 'result = Number(firstValue) - Number(secondValue)':
    case 'result = Number(firstValue) * Number(secondValue)':
    case 'result = Number(firstValue) / Number(secondValue)':
    case 'result = Number(firstValue) * Number(secondValue) / 100':
    case 'result = Number(firstValue) ^ Number(secondValue)':
        alert ('result');
        break;
}

buttonEquals.addEventListener('click', () => {
    alert(result)
})