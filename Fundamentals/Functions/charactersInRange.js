function charactersInRange (char1, char2){

    let code1 = char1.charCodeAt();
    let code2 = char2.charCodeAt();
    let charToPrint = [];

    if (code1 > code2){
        let temp = code1;
        code1 = code2;
        code2 = temp;
    }

    for (let i = code1 + 1; i < code2; i++){
        let char = String.fromCharCode(i);
        charToPrint.push(char);
    }

    console.log(charToPrint.join(" "));
}

charactersInRange('C',

'#');