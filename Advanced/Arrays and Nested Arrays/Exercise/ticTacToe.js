function switchPlayer(player){
    if (player === "X"){
        return player = "O";
    } else {
        return player = "X";
    }
}

function checkForWin(dashboard){
    
}

function ticTacToe(array){
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let player = "X";

    for (let el of array){
        let [cord1, cord2] = el.split(" ");
        if (dashboard[cord1][cord2] === false){
            dashboard[cord1][cord2] = player;
            player = switchPlayer(player);
        } else {
            console.log("This place is already taken. Please choose another!");
        }
    }

    console.log(dashboard);
}

ticTacToe(["0 1",

    "0 0",
    
    "0 2",
    
    "2 0",
    
    "1 0",
    
    "1 1",
    
    "1 2",
    
    "2 2",
    
    "2 1",
    
    "0 0"]);