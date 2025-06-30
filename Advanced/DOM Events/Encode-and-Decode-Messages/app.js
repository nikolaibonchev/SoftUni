function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll("button");

    const encodeBtn = buttons[0];
    const decodeBtn = buttons[1];
    // let isDecoded = true;
    
    encodeBtn.addEventListener("click", startEncode);
    decodeBtn.addEventListener("click", startDecode);

    function startEncode(e){
        let encodedMessage = "";
        const message = encodeBtn.previousElementSibling;
        const reciever = decodeBtn.previousElementSibling;

        // if (isDecoded) {
        for (let i = 0; i < message.value.length; i++){
            let charCode = message.value.charCodeAt(i);
            encodedMessage += String.fromCharCode(charCode + 1);
        }

        reciever.value = encodedMessage;
        message.value = "";
        // }

        // isDecoded = false
    }

    function startDecode(e){
        const reciever = decodeBtn.previousElementSibling;
        let decodedMessage = "";
        
        // if (!isDecoded) {
        for (let i = 0; i < reciever.value.length; i++){
            let charCode = reciever.value.charCodeAt(i);
            decodedMessage += String.fromCharCode(charCode - 1);
        }
        reciever.value = decodedMessage;
        // }
        // isDecoded = true;
        
    }
}

//Alpha Judge doesn't want quality!