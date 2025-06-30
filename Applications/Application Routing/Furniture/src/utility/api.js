import { getUserData } from "./userHelper.js";

const BASE_URL = "http://localhost:3030/";

function makeRequest(method, endpoint, data = null) {
    const userData = getUserData();
    const options = {
        method,
        headers: {}
    }

    if (userData.accessToken) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    if (data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    return fetch(`${BASE_URL}${endpoint}`, options)
        .then(async res => {
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message);
            }
            if (res.status === 204) return null;
            return res.json();
        });
}

function postReq(endpoint, data) {
    return makeRequest('POST', endpoint, data);
}

function getReq(endpoint) {
    return makeRequest('GET', endpoint);
}

function putReq(endpoint, data) {
    return makeRequest('PUT', endpoint, data);
}

function delReq(endpoint) {
    return makeRequest('DELETE', endpoint);
}

export const requests = {
    postReq,
    getReq,
    putReq,
    delReq
}