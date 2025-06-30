function evenPosition(arr){
    let evenArr = [];
    for (let el of arr){
        if (indexOf(el) % 2 == 0){
            evenArr.push(el);
        }
    }
    console.log(evenArr.join(" "));
}

evenPosition(['20', '30', '40', '50', '60'])