function specialNumbers(num){
    for (let i = 1; i <= num; i++){
        if (i < 10){
            if (i === 5 || i == 7){
                console.log(`${i} -> True`);
            } else {
                console.log(`${i} -> False`);
            }
        } else {
            let numToString = String(i);
            let sum = 0;

            for (let digit of numToString){
                sum += parseInt(digit);
            }

            switch (sum){
                case (5):
                case (7):
                case (11):
                    console.log(`${i} -> True`);
                    break;
                default:
                    console.log(`${i} -> False`);
                    break;
            }
        }
    }
}

specialNumbers(15)