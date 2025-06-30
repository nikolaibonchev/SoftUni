import { requests } from "../utility/api.js";

function loginReq(data) {
    return requests.postReq("users/login", data);
}

function registerReq(data) {
    return requests.postReq("users/register", data);
}

function logoutReq(){
    return requests.getReq("users/logout");
}

export const userRequests = {
    loginReq,
    registerReq,
    logoutReq,
}