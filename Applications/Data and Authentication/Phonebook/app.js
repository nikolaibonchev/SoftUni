function attachEvents() {
    let url = `http://localhost:3030/jsonstore/phonebook`;
    let ul = document.getElementById('phonebook');
    let loadBtn = document.getElementById('btnLoad');
    let createBtn = document.getElementById('btnCreate');
    let [personInput, phoneInput] = document.querySelectorAll('input[type="text"]');

    loadBtn.addEventListener('click', loadPhonebook);
    createBtn.addEventListener('click', createPhone);

    function loadPhonebook(){
        ul.innerHTML = '';

        fetch(url)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(obj =>{
                let {person, phone, _id} = obj;

                let li = document.createElement('li');
                li.textContent = `${person}: ${phone}`;

                let delBtn = document.createElement('button');
                delBtn.textContent = 'DELETE';
                delBtn.addEventListener('click', ()=>{
                    let urlPhone = `http://localhost:3030/jsonstore/phonebook/${_id}`;

                    fetch(urlPhone, {
                        method: 'DELETE'
                    })
                });

                li.appendChild(delBtn);
                ul.appendChild(li);
            })
        })
        .catch(err => alert(err.message));
    }

    function createPhone(){
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({person: personInput.value, phone: phoneInput.value})
        })
        personInput.value = '';
        phoneInput.value = '';

        loadBtn.click();
    }
}

attachEvents();