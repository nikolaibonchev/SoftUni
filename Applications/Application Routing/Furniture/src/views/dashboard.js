import { html, render } from 'https://unpkg.com/lit-html?module';
import { dataRequests } from '../service/dataService.js';

const root = document.querySelector('.container');

const furnitureCardTemplate = (item) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="/details/${item.img}" />
                <p>${item.description}</p>
                <footer>
                    <p>Price: <span>${item.price} $</span></p>
                </footer>
                <div>
                    <a href="/details/${item._id}" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>
`;

const wlcmTemplate = (items) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
    <div class="row space-top">
        ${items.length > 0
            ? items.map(furnitureCardTemplate)
            : html`<p>No furniture in catalog.</p>`}
    </div>
`;

export async function dashboardView() {
    try {
        let data = await dataRequests.getAllFurniture();
        const items = Array.isArray(data) ? data : Object.values(data || {});
        render(wlcmTemplate(items), root);
    } catch (err) {
        render(html`<p style="color:red">Error loading catalog: ${err.message}</p>`, root);
    }
}