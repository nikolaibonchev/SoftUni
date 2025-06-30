function subtract() {
    let firstNumEl = document.getElementById('firstNumber').value;
    let secondNumEl = document.getElementById('secondNumber').value;

    let result = document.querySelector('#result')
    let button = document.getElementById('#doMath');

    button = result.textContent = Number(firstNumEl) - Number(secondNumEl);
    console.log(button);
    
}