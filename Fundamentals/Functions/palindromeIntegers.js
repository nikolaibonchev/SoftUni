function palindromeIntegers (array){

    for (let i = 0; i < array.length; i++){
        let strNum = array[i].toString();
        let numRev = '';

        for (let j = strNum.length - 1; j >= 0; j--){
            numRev += strNum[j];
        }

        if (strNum === numRev){
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

palindromeIntegers([32,2,232,1010]);