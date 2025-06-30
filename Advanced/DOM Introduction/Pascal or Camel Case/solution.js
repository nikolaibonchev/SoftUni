function solve() {
  let firstElement = document.getElementById('text').value.toLowerCase().split(' ');
  let secondElement = document.getElementById('naming-convention').value.toLowerCase();

  let resultElement = document.getElementById('result');
  let result = "";

  if (secondElement === "camel case"){

    result = firstElement[0] + firstElement.slice(1).map((word) => word[0].toUpperCase() + word.slice(1)).join('');
    resultElement.textContent = result;

  } else if (secondElement === "pascal case"){
    
    result = firstElement.slice(0).map((word) => word[0].toUpperCase() + word.slice(1)).join('');
    resultElement.textContent = result;

  } else {
    resultElement.textContent = 'Error!';
  }
}