function biggestElement(matrix){
    let keepNums = [];
    
    for (let i = 0; i < matrix.length; i++){
        let array = matrix[i];
        sortedArray = array.sort((a, b) => b - a);
        keepNums.push(sortedArray[0]);
    }

    function findBig(arr){
        let sortedArr = arr.sort((a, b) => b - a);
        return sortedArr[0];
    }

    return findBig(keepNums);
}

console.log(biggestElement([
    [3, 5, 7, 12], 
    [-1, 4, 33, 2], 
    [8, 3, 0, 4]]));