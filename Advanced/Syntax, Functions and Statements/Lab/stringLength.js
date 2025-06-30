function stringLength(strI, strII, strIII){
    const lengthI = strI.length;
    const lengthII = strII.length;
    const lengthIII = strIII.length;

    let lengthSum = lengthI + lengthII + lengthIII;
    let lengthAvarage = Math.floor(lengthSum / 3);

    console.log(lengthSum);
    console.log(lengthAvarage);
}

stringLength('pasta', '5', '22.3' )