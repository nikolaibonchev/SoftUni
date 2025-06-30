function sumNtoM(n, m){
    let sum = 0;
    const num1 = Number(n);
    const num2 = Number(m);

    for (let i = num1; i <= num2; i++){
        sum += i;
    }

    console.log(sum);
}

sumNtoM("1", "5")