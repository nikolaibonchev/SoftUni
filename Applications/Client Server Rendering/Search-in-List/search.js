import {html, render} from 'https://unpkg.com/lit-html?module';
import { towns } from './towns.js';

const townsTemplate = (towns) => html `
   <ul>
      ${towns.map(town => html`
         <li>${town}</li>
         `)}
   </ul>
`;

document.querySelector('button').addEventListener('click', search);
const townsDiv = document.querySelector('#towns'); 
render(townsTemplate(towns), townsDiv);

function search(e) {
   e.preventDefault();

   const city = document.querySelector('#searchText')
   const listElements = document.querySelectorAll("li");
   const resultElement = document.getElementById('result');
   let matches = 0;

   for (let i = 0; i < towns.length; i++){
      if(city.value === ' ' || city.value === ''){
         return resultElement.textContent = `${matches} matches found`;
      }
      if(towns[i].includes(city.value)){
         listElements[i].classList = 'active';
         matches++;
      }
   }
   city.value = '';
   return resultElement.textContent = `${matches} matches found`;
}