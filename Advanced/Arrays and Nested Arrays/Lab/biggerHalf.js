function biggerHalf(arr){
    let result = [];

    let sortedArr = arr.sort((a, b) => a - b);
    result = sortedArr.slice((sortedArr.length / 2), sortedArr.length);

    return result;
}

biggerHalf([4, 7, 2, 5, 9]);