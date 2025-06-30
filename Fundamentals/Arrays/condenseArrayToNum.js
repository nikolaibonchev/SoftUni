function condenseArrayToNum(array){
    
    while (array.length > 1){
        let condense = [];
        for (let i = 0; i < array.length - 1; i++){
            condense.push(array[i] + array[i+1]);
        }
        array = condense;
    }

    console.log(array[0]);

}

condenseArrayToNum([1]);