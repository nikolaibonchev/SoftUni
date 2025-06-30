function distinctArray(arr){
    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        const getNum = Number(arr[i]);

        if (newArr.includes(getNum)){
            continue;
        } else {
            newArr.push(getNum);
            continue;
        }
    }

    console.log(newArr.join(' '));

}

distinctArray([1, 2, 3, 4]);