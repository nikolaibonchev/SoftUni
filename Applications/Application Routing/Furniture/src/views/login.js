import {html, render} from 'https://unpkg.com/lit-html?module';
import page from "//unpkg.com/page/page.mjs";
import { userRequests } from '../service/userService.js';
import { setUserData } from '../utility/userHelper.js';
import { initNavigation } from '../utility/navigation.js';

const root = document.querySelector('.container');
const loginTemplate = (onSubmit) => html `
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
`;

export function loginView(){
    render(loginTemplate(onSubmit), root)
}

async function onSubmit(e) {
     e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!data.email || !data.password) {
        return alert('Please fill all fields!');
    }

    if (data.password.length < 5) {
        return alert('Password must be at least 6 characters!');
    }

    try {
            const res = await userRequests.loginReq({
                email: data.email,
                password: data.password
            });
            
            setUserData(res)
            page.redirect('/');
            initNavigation();
        } catch (err) {
            alert(err.message);
        }
}