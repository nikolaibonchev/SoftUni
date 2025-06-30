import { userRequests } from '../service/userService.js';
import { clearUserData } from '../utility/userHelper.js';
import page from "//unpkg.com/page/page.mjs";
import { initNavigation } from '../utility/navigation.js';

export function logoutView(){
    userRequests.logoutReq();
    clearUserData();
    page.redirect('/');
    initNavigation();
}