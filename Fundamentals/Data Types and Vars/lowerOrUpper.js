function lowerOrUpper(letter){
    let toupper = letter.toUpperCase();

    if (toupper === letter){
        console.log(`upper-case`);
    } else {
        console.log(`lower-case`);
    }
}

lowerOrUpper("f")