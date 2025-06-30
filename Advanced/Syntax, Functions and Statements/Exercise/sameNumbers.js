function sameNumbers(input){
    let sum = 0;
    let numAsArr = String(input)
    let firstDigit = numAsArr[0]
    let same = true;

    for (let i = 0; i < numAsArr.length; i++){
        sum += Number(numAsArr[i]);

        if (numAsArr[i] !== firstDigit){
            same = false;
        }
    }

    console.log(same);
    console.log(sum);
}

sameNumbers(1234)