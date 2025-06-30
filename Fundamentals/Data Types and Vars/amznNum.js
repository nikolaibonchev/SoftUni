function amznNum(num){
    let numToString = String(num);
    let sum = 0;

    for (let i = 0; i < numToString.length; i++){
        let digit = Number(numToString[i]);
        sum += digit;
    }

    let result = sum.toString().includes(9);

    console.log(result 
        ? `${num} Amazing? True`
        : `${num} Amazing? False`);
}

amznNum(1233)