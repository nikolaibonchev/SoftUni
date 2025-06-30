function lastKNumbers(length, steps){
    let arr = [1];

    for (let i = 1; i < length; i++){
        let lastK = arr.slice(-steps);
        let sum = lastK.reduce((a, b) => a + b, 0);
        arr.push(sum);
    }

    console.log(arr);
}

lastKNumbers(6, 3);