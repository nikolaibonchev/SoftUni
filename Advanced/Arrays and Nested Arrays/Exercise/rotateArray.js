function rotateArray(array, rotation){
    let element = '';
    for(let i = 0; i < rotation; i++){
        element = array.pop();
        array.unshift(element);
    }

    console.log(array.join(" "));
}

rotateArray(['1','2','3','4'], 2)
rotateArray(['Banana','Orange','Coconut','Apple'], 15)