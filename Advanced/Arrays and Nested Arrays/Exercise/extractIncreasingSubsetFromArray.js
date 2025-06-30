function extractIncreasingSubsetFromArray(array){
    let biggest = 0;
    let result = [];

    for (let i = 0; i < array.length; i++){
        if (array[i] > biggest){
            result.push(array[i]);
            biggest = array[i];
        }
    }

    return result
}

console.log(extractIncreasingSubsetFromArray())

function solve(array){
    let result = [];

    array.reduce((a,b) => {
        if (b > a){
            result.push(b);
            return b;
        }
        return a;
    }, Number.MIN_SAFE_INTEGER);

    console.log(result);

}