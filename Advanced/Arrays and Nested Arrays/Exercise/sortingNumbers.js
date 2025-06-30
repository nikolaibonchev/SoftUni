function sortingNumbers(numbers){
    let sortedNums = [...numbers].sort((a,b) => a - b);
    let result = [];
    let smallestElement = 0;
    let biggestElement = 0;

    while(sortedNums.length !== 0){
        smallestElement = sortedNums.shift();
        biggestElement = sortedNums.pop();
        result.push(smallestElement, biggestElement);
    }

    if (numbers.length < result.length){
        result.pop();
        return result;
    } else {
        return result;
    }
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18]));