import { html, render } from 'https://unpkg.com/lit-html?module';
import { dataRequests } from '../service/dataService.js';
import { getUserData } from '../utility/userHelper.js';

const root = document.querySelector('.container');

const cardsTemplate = (item) => html `
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="/details/${item.img}" />
                <p>${item.description}</p>
                <footer>
                    <p>Price: <span>${item.price}</span></p>
                </footer>
                <div>
                    <a href="/details/${item._id}" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>
`;

const myPublicationsTemplate = (items) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
        ${items.length > 0
            ? items.map(cardsTemplate)
            : html`<p>You have no furniture.</p>`}
    </div>
`;


export async function myPublicationsView() {
    try {
        const user = getUserData();
        if (!user || !user.userId) {
            render(html`<p style="color:red">You must be logged in to see your publications.</p>`, root);
            return;
        }
        let data = await dataRequests.getMyFurniture(user.userId);
        const items = Array.isArray(data) ? data : Object.values(data || {});
        render(myPublicationsTemplate(items), root);
    } catch (err) {
        render(html`<p style="color:red">Error loading catalog: ${err.message}</p>`, root);
    }
}