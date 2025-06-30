import page from "//unpkg.com/page/page.mjs";
import {html, render} from 'https://unpkg.com/lit-html?module';
import { createFunitureView } from "./views/createFurniture.js";
import { dashboardView } from "./views/dashboard.js";
import { loginView } from "./views/login.js";
import { logoutView } from "./views/logout.js";
import { registerView } from "./views/register.js";
import { myPublicationsView } from "./views/myPublications.js";
import { initNavigation } from "./utility/navigation.js";
import { getDetails } from "./views/details.js";

initNavigation();

page('/dashboard', dashboardView);
page('/', dashboardView);
page('/details/:id', getDetails);
page('/create', createFunitureView);
page('/logout', logoutView);
page('/login', loginView);
page('/register', registerView);
page('/mypublications', myPublicationsView);
page.start()