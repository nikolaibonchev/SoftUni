function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let inputElement = document.getElementById('searchField').value.toLowerCase();
      let trElements = document.querySelectorAll('table tbody tr');

      for (let row of trElements) {
         row.classList.remove('select');
         let rowText = row.textContent.toLowerCase();
         if (inputElement && rowText.includes(inputElement)) {
            row.classList.add('select');
         }
      }
      document.getElementById('searchField').value = '';
   }
}