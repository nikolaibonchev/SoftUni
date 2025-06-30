function mathOperations(num1, num2, operator){
    let result = 0;
    switch(operator){
        case '+':
            result = num1 + num2;
            console.log(result);
            break;
        case '-':
            result = num1 - num2;
            console.log(result);
            break;
        case '*':
            result = num1 * num2;
            console.log(result);
            break;
        case '/':
            result = num1 / num2;
            console.log(result);
            break;
        case '%':
            result = num1 % num2;
            console.log(result);
            break;
        case '**':
            result = num1 ** num2;
            console.log(result);
            break;
    }
}

mathOperations(4, 4, "*")