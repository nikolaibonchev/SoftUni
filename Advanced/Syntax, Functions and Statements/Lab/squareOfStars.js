function squareOfStars(num){
    for (let i = num; i > 0; i--){
        let buffer = '';
        for (let k = 0; k < num; k++){
            buffer += "* ";
        }

        console.log(buffer);
    }
}

squareOfStars(2)