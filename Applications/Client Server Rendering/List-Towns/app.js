import {html, render} from 'https://unpkg.com/lit-html?module';

const rootElement = document.querySelector('#root');

const form = document.querySelector('.content').addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    const {towns} = Object.fromEntries(new FormData(e.currentTarget));
    const townsArray = towns.split(', ');
    render(townsListTemplate(townsArray), rootElement)
}

const townsListTemplate = (towns) => html`
    <ul>
        ${towns.map(town => html`
            <li>
                ${town}
            </li>
        `)}
    </ul>
`;