function aggregateElements(arr){
    function sum(i){
        let sum = 0;
        for (const number of i){
            sum += number;
        }
        return sum
    }
    function sumInverse(i){
        let sum = 0;
        for (const number of i){
            sum += 1/number;
        }
        return sum
    }
    function concat(i){
        let concat = "";
        for (const number of i){
            let numToString = String(number);
            concat += numToString;
        }
        return concat
    }

    console.log(sum(arr));
    console.log(sumInverse(arr));
    console.log(concat(arr));
}

aggregateElements([1, 2, 3])