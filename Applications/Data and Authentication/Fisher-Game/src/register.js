document.getElementById('user').style.display = 'none';
document.getElementById('home').classList.remove('active');
document.getElementById('register').classList.add('active');

const url = `http://localhost:3030/users/register`;

const notification = document.querySelector('.notification');
const registerForm = document.querySelector('form');
registerForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const {email, password, rePass} = Object.fromEntries(new FormData(e.currentTarget))
    notification.textContent = '';

    if(email === '' || password === '' || rePass === ''){
        notification.textContent = 'Dude you missed something!';
        return;
    } else if (rePass !== password){
        notification.textContent = 'Passwords does not match!';
        return;
    }
    

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
            rePass
        })
    })
    .then(res => res.json())
    .then(data =>{
        switch(data.code){
            case 409:
                notification.textContent = 'This email already exist!';
                return;
            case 400:
                notification.textContent = 'Dude you missed something!';
                return;
        }
        
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('email', data.email);
        localStorage.setItem('_id', data._id);

        location.href = 'index.html';
    })
    .catch((err) => alert(err.message));
})