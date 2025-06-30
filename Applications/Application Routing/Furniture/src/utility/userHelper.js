export function getUserData() {
    return {
        accessToken: sessionStorage.getItem('accessToken'),
        email: sessionStorage.getItem('email'),
        userId: sessionStorage.getItem('_id')
    };
}

export function setUserData(data) {
    sessionStorage.setItem('accessToken', data.accessToken);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('_id', data._id);
}

export function clearUserData() {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('_id')
}
