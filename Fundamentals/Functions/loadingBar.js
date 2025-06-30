function loadingBar(num){

    if (num === 100){
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else {
        const percent = num / 10;
        const dots = 10 - percent;
        let arr = [];
        let bar = [];

        for (let i = 1; i <= percent; i++){
            arr += '%';
        }
        
        for (let k = 1; k <= dots; k++){
            arr += '.';
        }

        bar += '[' + arr + ']';

        console.log(`${num}% ${bar}`);
        console.log("Still loading...");
    }
}

loadingBar(80)