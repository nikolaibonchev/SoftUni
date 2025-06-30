function bombNumbers(numbers, special){
    const specNum = special[0];
    const specPow = special[1];
    let numCopy = [...numbers];
    let sum = 0; 

    for (let j = 0; j < numCopy.length; j++){
        let test = numbers.indexOf(specNum);
        
        if (test < 0){
            break;
        }

        for (let i = 0; i < specPow; i++){
            let findSpec = numbers.indexOf(specNum);
            numbers.splice(findSpec-1, 1);
        }

        for (let i = 0; i < specPow; i++){
            let findSpec = numbers.indexOf(specNum);
            numbers.splice(findSpec+1, 1);
        } 

        let findSpec = numbers.indexOf(specNum);
        numbers.splice(findSpec,1);

    }

    for (let i = 0; i < numbers.length; i++){
        let num = Number(numbers[i]);
        sum += num;
    }

    console.log(sum);
}

bombNumbers([1, 1, 2, 1, 1, 1,2, 1, 1, 1],[2, 1]);