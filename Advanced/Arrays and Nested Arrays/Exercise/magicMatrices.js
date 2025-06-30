function magicMatrices(matrix){
    let sumOfColumns = new Array(matrix[0].length).fill(0)
    let sumOfRows = [];

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    for(let element of matrix){
        sumOfRows.push(element.reduce(reducer));
        for(let i = 0; i < element.length; i++){
            sumOfColumns[i] += element[i];
        }
    } 

    function checkIfSame(arr){
        return arr.every((value) => value === arr[0])
    }

    if (checkIfSame(sumOfColumns) && checkIfSame(sumOfRows)){
        return true;
    } else {
        return false;
    }
}

console.log(magicMatrices([[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]]));