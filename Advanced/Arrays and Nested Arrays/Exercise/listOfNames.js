function listOfNames(list){
    list.sort((a,b) => a.localeCompare(b));
    let n = 1;

    for (let el of list){
        console.log(`${n}.${el}`);
        n++;
    }
}

listOfNames(["John","Bob","Christina","Ema"])