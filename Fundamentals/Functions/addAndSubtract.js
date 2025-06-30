function addAndSubtract (num1, num2, num3){

    function sum (a, b){
        const sum = a + b;
        return sum;
    }

    function subtract (a, b){
        const sub = a - b;
        return sub;
    }

    const sumof = sum(num1, num2);
    const subtracted = subtract(sumof, num3);

    console.log(subtracted);

}

addAndSubtract(23,

    6,
    
    10);