function train(arr){
    const wagoons = arr.shift().split(' ');
    const capacity = Number(arr.shift());

    for (const command of arr){
        let action = command.split(' ');

        if (action.length === 1){
            let actionNum = Number(action[0]);

            for (let i = 0; i <= wagoons.length; i++){
                let wagoonsNum = Number(wagoons[i]);

                if ((wagoonsNum + actionNum) <= capacity){
                    let sum = wagoonsNum + actionNum;
                    wagoons.splice(i,1,sum);
                    break;

                } else {
                    continue;
                }
            }
        }else{
            wagoons.push(action[1]);
        }
    }

    console.log(wagoons.join(' '));

}

train(['0 0 0 10 2 4','10','Add 10','10','10','10','8','6'])