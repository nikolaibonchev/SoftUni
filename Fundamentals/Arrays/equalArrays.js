function equalArrays(arr1, arr2){
    let sum = 0;
    let isDifferent = false;

    for (let i = 0; i < arr1.length; i++){
        let arr1Num = Number(arr1[i]);
        let arr2Num = Number(arr2[i]);

        if (arr1Num === arr2Num){
            sum += arr1Num;
        } else {
            isDifferent = true;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }

    }

    if (!isDifferent){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(
    ['1'], ['10'])