document.getElementById('user').style.display = 'none';
document.getElementById('home').classList.remove('active');
document.getElementById('login').classList.add('active');

const url = `http://localhost:3030/users/login`;

const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const {email, password} = Object.fromEntries(new FormData(e.currentTarget))

    if(email === '' || password === ''){
        return alert('Dude you missed something!');
    }
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        })
    })
    .then(res => res.json())
    .then(data =>{
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('email', data.email);
        localStorage.setItem('_id', data._id);

        if(data.code >= 400){
            console.log(data);
            
            return alert(data.message);
        }
        location.href = 'index.html';
    })
    .catch((err) => alert(err.message));
})