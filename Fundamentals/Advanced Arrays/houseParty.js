function houseParty(arr){
    let guests = [];

    for (let i = 0; i < arr.length; i++){
        let input = arr[i];
        let splitArr = input.split(' ');
        let name = splitArr.shift();
        let command = splitArr.join(' ');

        if (command === 'is going!' && !guests.includes(name)){
            guests.push(name);
        } else if (command === 'is going!' && guests.includes(name)){
            guests.unshift(`${name} is already in the list!`);
        } else if (command === 'is not going!' && !guests.includes(name)){
            guests.unshift(`${name} is not in the list!`);
        } else if (command === 'is not going!' && guests.includes(name)){
            let index = guests.indexOf(name);
            guests.splice(index,1);
        }
    }

    console.log(guests.join('\n'));
}

houseParty(['Allie is going!','George is going!','John is not going!','George is not going!']);