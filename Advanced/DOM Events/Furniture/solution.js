function solve() {
  const getInput = document.querySelector("textarea");
  const [generateBtn, buyBtn] = document.querySelectorAll("button");
  const tableBody = document.querySelector("tbody");
  const resultOutput = document.querySelectorAll("textarea")[1]; // второто textarea

  generateBtn.addEventListener("click", generateFurniture);
  buyBtn.addEventListener("click", buyFurniture);

  function generateFurniture(e) {
    const parsedInput = JSON.parse(getInput.value)[0];

    tableBody.insertAdjacentHTML('beforeend',`
      <tr>
      <td>
      <img src=${parsedInput.img}>
      </td>
      <td>
      <p>${parsedInput.name}</p>
      </td>
      <td>
      <p>${parsedInput.price}</p>
      </td>
      <td>
      <p>${parsedInput.decFactor}</p>
      </td>
      <td>
      <input type="checkbox" />
      </td>
      </tr>`);
  } 

  function buyFurniture(e){
  const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);
  const bought = [];
  let totalPrice = 0;
  let totalDecFactor = 0;
  let count = 0;

  for (let box of checkboxes) {
    if (box.checked) {
      const row = box.parentElement.parentElement;
      const name = row.querySelectorAll('td')[1].textContent.trim();
      const price = Number(row.querySelectorAll('td')[2].textContent.trim());
      const decFactor = Number(row.querySelectorAll('td')[3].textContent.trim());
      bought.push(name);
      totalPrice += price;
      totalDecFactor += decFactor;
      count++;
    }
  }

  const avgDecFactor = count > 0 ? totalDecFactor / count : 0;

  resultOutput.value =`
    Bought furniture: ${bought.join(', ')}
    Total price: ${totalPrice.toFixed(2)}
    Average decoration factor: ${avgDecFactor}`;
  }
}