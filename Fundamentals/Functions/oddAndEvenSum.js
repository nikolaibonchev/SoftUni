function oddAndEvenSum (numbers){
    let num = [];
    const numToString = String(numbers);

    for (let i = 0; i < numToString.length; i++){
        num.push(numToString[i])
    }

    function sumNumbers (n){
        let oddSum = 0;
        let evenSum = 0;

        for (let i = 0; i < n.length; i++){
            let num = Number(n[i]);

            if (num % 2 === 0){
                evenSum += num;
            } else {
                oddSum += num;
            }
        }

        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    }

    sumNumbers(num)
}

oddAndEvenSum(3495892137259234);