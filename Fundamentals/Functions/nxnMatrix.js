function nxnMatrix (num){
    
    function createArray (n){
        let array = [];
        let matrix = [];
        
        for (let i = 0; i < n; i++){
            array += ' ' + n;
        }

        for (let i = 0; i < n; i++){
            matrix +='\n' + array;
        }
        console.log(matrix);
    }

    createArray(num);
}

nxnMatrix(7);