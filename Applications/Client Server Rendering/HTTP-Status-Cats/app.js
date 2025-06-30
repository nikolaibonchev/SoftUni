import {html, render} from 'https://unpkg.com/lit-html?module';
import { cats } from './catSeeder.js';

const catsTemplate = (cats) => html`
    <ul>
        ${cats.map(cat => html`
            <li>
                <img src='./images/${cat.imageLocation}.jpg' width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button @click=${onClick} class="showBtn">Show status code</button>
                    <div class="status" style="display: none" id=${cat.id}>
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </
        `)}
    </ul>
`;

const allCatsEl = document.querySelector('#allCats');
render(catsTemplate(cats), allCatsEl);

function onClick(e){
    e.preventDefault();
    if (e.currentTarget.textContent === 'Show status code'){
        e.currentTarget.textContent = 'Hide status code';
        e.currentTarget.nextElementSibling.style.display = 'inline';
    } else {
        e.currentTarget.textContent = 'Show status code';
        e.currentTarget.nextElementSibling.style.display = 'none';
    }
}