function intNfloat(num1, num2, num3){
    let sum = num1 + num2 + num3;

    if (sum % 1 === 0){
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}

intNfloat(100, 200, 303)