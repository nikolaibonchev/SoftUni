function addItem() {
    const textInput = document.querySelector(`#newItemText`);
    const valueInput = document.querySelector(`#newItemValue`);
    const selector = document.querySelector("#menu");

    if (textInput.value.trim() !== "" && valueInput.value.trim() !== "") {
        const optionChild = document.createElement("option");
        optionChild.textContent = textInput.value;
        optionChild.value = valueInput.value;

        selector.appendChild(optionChild);

        textInput.value = "";
        valueInput.value = "";
    }
}