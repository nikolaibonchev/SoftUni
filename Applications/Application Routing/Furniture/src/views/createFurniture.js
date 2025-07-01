import { html, render } from 'https://unpkg.com/lit-html?module';
import { dataRequests } from '../service/dataService.js';
import page from "//unpkg.com/page/page.mjs";

const root = document.querySelector('.container');

const createFurnitureTemplate = (onSubmit, errors = {}, values = {}) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit} @input=${(e) => onInput(e, onSubmit)}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control ${errors.make === undefined ? '' : (errors.make ? 'is-invalid' : 'is-valid')}" id="new-make" type="text" name="make" value=${values.make || ''}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control ${errors.model === undefined ? '' : (errors.model ? 'is-invalid' : 'is-valid')}" id="new-model" type="text" name="model" value=${values.model || ''}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control ${errors.year === undefined ? '' : (errors.year ? 'is-invalid' : 'is-valid')}" id="new-year" type="number" name="year" value=${values.year || ''}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control ${errors.description === undefined ? '' : (errors.description ? 'is-invalid' : 'is-valid')}" id="new-description" type="text" name="description" value=${values.description || ''}>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control ${errors.price === undefined ? '' : (errors.price ? 'is-invalid' : 'is-valid')}" id="new-price" type="number" name="price" value=${values.price || ''}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image (from ./image/...)</label>
                    <input class="form-control ${errors.img === undefined ? '' : (errors.img ? 'is-invalid' : 'is-valid')}" id="new-image" type="text" name="img" value=${values.img || ''}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material" value=${values.material || ''}>
                </div>
                <input type="submit" class="btn btn-primary" value="Create" />
            </div>
        </div>
    </form>
`;

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

function onInput(e, onSubmit) {
    const form = e.target.form || e.target.closest('form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const errors = validateFields(data);
    render(createFurnitureTemplate(onSubmit, errors, data), root);
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const errors = validateFields(data);

    if (Object.values(errors).some(Boolean)) {
        render(createFurnitureTemplate(onSubmit, errors, data), root);
        return alert('Please fix the errors in the form!');
    }

    data.year = Number(data.year);
    data.price = Number(data.price);

    try {
        await dataRequests.createFurniture(data);
        page.redirect('/dashboard');
    } catch (err) {
        alert('Error creating furniture: ' + err.message);
    }
}

export function createFunitureView() {
    render(createFurnitureTemplate(onSubmit), root);
}