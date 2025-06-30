function attachEventsListeners() {
    const buttonInputsRef = document.querySelectorAll(`input[type="button"]`);

    let currentValue = 0;
    
    const dayInput = document.querySelector(`#days`);
    const hoursInput = document.querySelector(`#hours`);
    const minutesInput = document.querySelector(`#minutes`);
    const secondsInput = document.querySelector(`#seconds`);

    for (let input of buttonInputsRef){
        input.addEventListener("click", buttonInput);
    }

    function buttonInput(e){
        const currentButton = e.currentTarget;
        currentValue = currentButton.previousSibling.previousSibling.value;

        if (currentButton.id === "daysBtn"){
            dayInput.value = currentValue;
            hoursInput.value = currentValue * 24;
            minutesInput.value = currentValue * 1440;
            secondsInput.value = currentValue * 86400;
        } else if (currentButton.id === "hoursBtn"){
            dayInput.value = currentValue / 24;
            hoursInput.value = currentValue;
            minutesInput.value = currentValue * 60;
            secondsInput.value = currentValue * 3600;
        } else if (currentButton.id === "minutesBtn"){
            dayInput.value = currentValue / 1440;
            hoursInput.value = currentValue / 60;
            minutesInput.value = currentValue;
            secondsInput.value = currentValue * 60;
        } else if (currentButton.id === "secondsBtn"){
            dayInput.value = currentValue / 86400;
            hoursInput.value = currentValue / 3600;
            minutesInput.value = currentValue / 60;
            secondsInput.value = currentValue;
        }
    }
}