function sorting(arr){

    let sortLtoH = [...arr].sort((a, b) => a - b);
    let sortedArr = [];
    
    while (sortedArr.length !== arr.length){
        sortedArr.push(sortLtoH.pop());
        sortedArr.push(sortLtoH.shift());
    }

    console.log(sortedArr.join(' '));

}

sorting([34, 2, 32, 45, 690, 6, 32,7, 19, 47]);