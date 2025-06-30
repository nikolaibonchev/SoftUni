function search() {
    let inputElement = document.getElementById('searchText').value.toLowerCase();
    let listElement = document.getElementById('towns');
    let listChildElement = listElement.querySelectorAll("li");
    let resultElement = document.getElementById('result');
 
    let townsArray = Array.from(listChildElement, li => li.textContent.toLowerCase());
    let matches = 0;

    for (let i = 0; i < townsArray.length; i++){
        listChildElement[i].style.fontWeight = "normal";
        listChildElement[i].style.textDecoration = "none";
    }

    for (let i = 0; i < townsArray.length; i++){
        if (inputElement === " " || inputElement === "") 
            return resultElement.textContent = `${matches} matches found`;
        if (townsArray[i].includes(inputElement)){
            listChildElement[i].style.fontWeight = "bold";
            listChildElement[i].style.textDecoration = "underline";
            matches++
        }
    }
    
    resultElement.textContent = `${matches} matches found`;
 }