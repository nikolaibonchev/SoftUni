import {html, render} from 'https://unpkg.com/lit-html?module';

document.querySelector('input[type="submit"]').addEventListener('click', addItem);
const input = document.querySelector('#itemText');
const selectMenu = document.querySelector('#menu');
const accessToken = localStorage.getItem('accessToken');

const selectorTemplate = (data) => html `
    ${data.map(city => html`
        <option value=${city._id}>
            ${city.text}
        </option>
    `)}
`;

function getCities() {
    fetch('http://localhost:3030/jsonstore/advanced/dropdown')
        .then(res => res.json())
        .then(data => {
            let cities = Object.values(data);
            render(selectorTemplate(cities), selectMenu);
        })
        .catch(err => alert(err.message));
}
getCities();

function addItem(e) {
    e.preventDefault();

    fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({text: input.value})
    })
    .catch(err => alert(err.message));

    getCities();
    input.value = '';
}