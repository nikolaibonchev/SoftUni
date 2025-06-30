function addAndSubtract(array){
    let newArr = [];
    let sumOld = 0;
    let sumNew = 0;

    for (let i = 0; i < array.length; i++){

        if (array[i] % 2 === 0){
            newArr.push(array[i]+i)
        } else {
            newArr.push(array[i]-i);
        }

        sumOld += array[i];
    }

    for (let j = 0; j < newArr.length; j++){
        sumNew += newArr[j];
    }

    console.log(newArr);
    console.log(sumOld);
    console.log(sumNew);

}

addAndSubtract([-5, 11, 3, 0, 2])