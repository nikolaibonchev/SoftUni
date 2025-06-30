import {html, render} from 'https://unpkg.com/lit-html?module';
import { contacts } from './contacts.js';

const contactsDiv = document.querySelector('#contacts');

const contactsTemplate = (contacts) => html`
    ${contacts.map(contact => html`
        <div class="contact card">
        <div>
            <i class="far fa-user-circle gravatar"></i>
        </div>
        <div class="info">
            <h2>Name: ${contact.name}</h2>
            <button @click=${onClick} class="detailsBtn">Details</button>
            <div class="details" id=${contact.id}>
                <p>Phone number: ${contact.phoneNumber}</p>
                <p>Email: ${contact.email}</p>
            </div>
        </div>
    </div>
    `)}
`;

render(contactsTemplate(contacts), contactsDiv);
function onClick(e){
    e.preventDefault();
    const detailsDiv = e.currentTarget.nextElementSibling;
    if (detailsDiv.classList.value === 'details'){
        detailsDiv.classList.remove('details');
    } else {
        detailsDiv.classList.add('details');
    }
}