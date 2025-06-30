function sumDigits(num){
    let numToString = String(num);
    let sum = 0;

    for (let digit of numToString){
        sum += parseInt(digit);
    }

    console.log(sum);
}

sumDigits(543)