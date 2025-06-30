import { getUserData } from "./userHelper.js";

const userNav = document.querySelector('#user');
const guestNav = document.querySelector('#guest');

export function initNavigation() {
    const userData = getUserData();
    guestNav.style.display = 'none';
    userNav.style.display = 'none';

    if (!userData?.accessToken || !userData?.email) {
        guestNav.style.display = 'inline';
    } else {
        userNav.style.display = 'inline';
    }
}