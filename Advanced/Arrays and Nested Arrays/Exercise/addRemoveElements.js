function addRemoveElements(commands){
    let result = [];
    let n = 1;

    for (let i = 0; i < commands.length; i++){
        if (commands[i] === "add"){
            result.push(n);
        } else {
            result.pop();
        }
        n++;
    }

    if (result.length === 0){
        console.log("Empty");
    } else {
        console.log(result.join("\n"));
    }
}

addRemoveElements(['remove','remove','remove',])
//addRemoveElements(['add','add','add','add'])