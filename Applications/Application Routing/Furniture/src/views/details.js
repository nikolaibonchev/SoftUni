import { html, render } from 'https://unpkg.com/lit-html?module';
import { dataRequests } from '../service/dataService.js';
import { getUserData } from '../utility/userHelper.js';
import page from "//unpkg.com/page/page.mjs";

const root = document.querySelector('.container');

const detailsTemplate = (item, isOwner) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src=${item.img} />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${item.make}</span></p>
            <p>Model: <span>${item.model}</span></p>
            <p>Year: <span>${item.year}</span></p>
            <p>Description: <span>${item.description}</span></p>
            <p>Price: <span>${item.price}</span></p>
            <p>Material: <span>${item.material}</span></p>
            <div>
                ${isOwner ? html`
                    <a href="javascript:void(0)" @click=${() => showEdit(item)} class="btn btn-info">Edit</a>
                    <a href="javascript:void(0)" @click=${() => onDelete(item._id)} class="btn btn-red">Delete</a>
                ` : ''}
            </div>
        </div>
    </div>
`;

const editFurnitureTemplate = (item, onSubmit, errors = {}) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit} @input=${(e) => onInput(e, item, onSubmit)}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control ${errors.make === undefined ? '' : (errors.make ? 'is-invalid' : 'is-valid')}" id="new-make" type="text" name="make" value=${item.make}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control ${errors.model === undefined ? '' : (errors.model ? 'is-invalid' : 'is-valid')}" id="new-model" type="text" name="model" value=${item.model}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control ${errors.year === undefined ? '' : (errors.year ? 'is-invalid' : 'is-valid')}" id="new-year" type="number" name="year" value=${item.year}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control ${errors.description === undefined ? '' : (errors.description ? 'is-invalid' : 'is-valid')}" id="new-description" type="text" name="description" value=${item.description}>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control ${errors.price === undefined ? '' : (errors.price ? 'is-invalid' : 'is-valid')}" id="new-price" type="number" name="price" value=${item.price}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image (from ./image/...)</label>
                    <input class="form-control ${errors.img === undefined ? '' : (errors.img ? 'is-invalid' : 'is-valid')}" id="new-image" type="text" name="img" value=${item.img}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material" value=${item.material}>
                </div>
                <input type="submit" class="btn btn-info" value="Edit" />
            </div>
        </div>
    </form>
`;

export async function getDetails(ctx) {
    const id = ctx.params.id;
    const item = await dataRequests.getFurnitureDetails(id);
    const user = getUserData();
    const isOwner = user && user.userId === item._ownerId;
    render(detailsTemplate(item, isOwner), root);
}

export function showEdit(item) {
    render(editFurnitureTemplate(item, (e) => onSubmit(e, item._id)), root);
}

function validateFields(data) {
    const errors = {};
    errors.make = !data.make || data.make.length < 4;
    errors.model = !data.model || data.model.length < 4;
    errors.year = !data.year || Number(data.year) < 1950 || Number(data.year) > 2050;
    errors.description = !data.description || data.description.length <= 10;
    errors.price = !data.price || Number(data.price) <= 0;
    errors.img = !data.img || data.img.trim() === '';
    return errors;
}

function onInput(e, item, onSubmit) {
    const form = e.target.form || e.target.closest('form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const errors = validateFields(data);
    render(editFurnitureTemplate({ ...item, ...data }, (ev) => onSubmit(ev, item._id), errors), root);
}

async function onSubmit(e, id) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const errors = validateFields(data);

    if (Object.values(errors).some(Boolean)) {
        render(editFurnitureTemplate({ ...data, _id: id }, (ev) => onSubmit(ev, id), errors), root);
        return alert('Please fix the errors in the form!');
    }

    data.year = Number(data.year);
    data.price = Number(data.price);

    try {
        await dataRequests.updateFurniture(id, data);
        page.redirect(`/details/${id}`);
    } catch (err) {
        alert('Error updating furniture: ' + err.message);
    }
}

async function onDelete(id) {
    const confirmed = confirm('Are you sure you want to delete this furniture?');
    if (!confirmed) return;
    try {
        await dataRequests.deleteFurniture(id);
        page.redirect('/dashboard');
    } catch (err) {
        alert('Error deleting furniture: ' + err.message);
    }
}