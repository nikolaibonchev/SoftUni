function processOddPositions(arr){
    let filteredArr = arr.filter((x, i) => i % 2 !== 0);
    let doubledArr = filteredArr.map(x => x * 2);
    let reversedArr = doubledArr.reverse();

    return reversedArr.join(" ");
}

console.log(processOddPositions([10, 15, 20, 25]));