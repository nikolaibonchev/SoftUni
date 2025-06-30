function passwordValidator (pass){

    function checkLength (pass){
        if (pass.length < 6 || pass.length > 10){
            console.log("Password must be between 6 and 10 characters");
            return false;
        } else {
            return true;
        }
    }
    
    function checkCharacters (pass){

        for (let i = 0; i < pass.length; i++){
            let char = pass[i];
            let code = char.charCodeAt();

            if (code >= 65 && code <= 90 || code >= 48 && code <= 57 || code >= 97 && code <= 122){
                continue;
            } else {
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }
        return true;
    }

    function checkDigitsAmount (pass){
       const pattern = /[0-9]{2,}/

       if (pattern.test(pass)){
            return true;
       } else {
            console.log("Password must have at least 2 digits");
            return false;
       }
    }

    const passLength = checkLength(pass);
    const passChars = checkCharacters(pass);
    const passDigits = checkDigitsAmount(pass);

    if (passLength && passChars && passDigits){
        console.log("Password is valid");
    }
}

//passwordValidator('MyPass123');
//passwordValidator('logIn');
//passwordValidator('Pa$s$s');