const email = localStorage.getItem('email');
const guest = document.querySelector('#guest');
const user = document.querySelector('#user');
const welcome = document.querySelector('span');
const catchesDiv = document.querySelector('#catches');
const loadBtn = document.querySelector('.load');
const addForm = document.querySelector('#addForm');

let userId = localStorage.getItem('_id');
let accessToken = localStorage.getItem('accessToken');

loadBtn.addEventListener('click', showCatches);


if (email && email !== 'undefined'){
    guest.style.display = 'none';
    user.style.display = 'inline';
    document.querySelector('.add').removeAttribute('disabled');
    welcome.textContent = email;
} else {
    user.style.display = 'none';
    guest.style.display = 'inline';
    welcome.textContent = 'guest';
    document.querySelector('.add').setAttribute('disabled');
}

addForm.addEventListener('submit', addCatch);

document.querySelector('#logout').addEventListener('click', ()=>{
    fetch('http://localhost:3030/users/logout')
    .then(res => res.json())
    .then(data =>{
        localStorage.clear();
        location.href = 'index.html';
    })
    .catch((err) => alert(err.message));
})

function showCatches(){
    fetch("http://localhost:3030/data/catches")
    .then(res => res.json())
    .then(catches => {
        catchesDiv.innerHTML = '';
        catches.forEach(element => {
            let {angler, bait, captureTime, location, species, weight, _createdOn, _id, _ownerId} = element;
            let newCatch = createCatch(angler, bait, captureTime, location, species, weight, _ownerId, _id);
            catchesDiv.appendChild(newCatch);
        });
    })
}

function createCatch(angler, bait, captureTime, location, species, weight, ownerId, id){
    const div = document.createElement('div');

    div.setAttribute('class', 'catch');

    const anglerLabel = document.createElement('label');;
    anglerLabel.textContent = 'Angler';
    const anglerInput = document.createElement('input');
    anglerInput.setAttribute('type', 'text');
    anglerInput.setAttribute('class', 'angler');
    anglerInput.setAttribute('value', `${angler}`);

    const weightLabel = document.createElement('label');;
    weightLabel.textContent = 'Weight';
    const weightInput = document.createElement('input');
    weightInput.setAttribute('type', 'text');
    weightInput.setAttribute('class', 'weight');
    weightInput.setAttribute('value', `${weight}`);

    const speciesLabel = document.createElement('label');;
    speciesLabel.textContent = 'Species';
    const speciesInput = document.createElement('input');
    speciesInput.setAttribute('type', 'text');
    speciesInput.setAttribute('class', 'species');
    speciesInput.setAttribute('value', `${species}`);

    const locationLabel = document.createElement('label');;
    locationLabel.textContent = 'Location';
    const locationInput = document.createElement('input');
    locationInput.setAttribute('type', 'text');
    locationInput.setAttribute('class', 'location');
    locationInput.setAttribute('value', `${location}`);

    const baitLabel = document.createElement('label');;
    baitLabel.textContent = 'Bait';
    const baitInput = document.createElement('input');
    baitInput.setAttribute('type', 'text');
    baitInput.setAttribute('class', 'bait');
    baitInput.setAttribute('value', `${bait}`);

    const captureTimeLabel = document.createElement('label');;
    captureTimeLabel.textContent = 'Capture Time';
    const captureTimeInput = document.createElement('input');
    captureTimeInput.setAttribute('type', 'number');
    captureTimeInput.setAttribute('class', 'captureTime');
    captureTimeInput.setAttribute('value', `${captureTime}`);

    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update';
    updateBtn.setAttribute('class', 'update');
    updateBtn.setAttribute('data-id', `${id}`);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('class', 'delete');
    deleteBtn.setAttribute('data-id', `${id}`);

    if(userId === ownerId){
        updateBtn.removeAttribute('disabled');
        deleteBtn.removeAttribute('disabled');

        updateBtn.addEventListener('click', updateCatch);
        deleteBtn.addEventListener('click', deleteCatch);
    } else {
        updateBtn.setAttribute('disabled', '');
        deleteBtn.setAttribute('disabled', '');
    }

    div.appendChild(anglerLabel);
    div.appendChild(anglerInput);
    div.appendChild(weightLabel);
    div.appendChild(weightInput);
    div.appendChild(speciesLabel);
    div.appendChild(speciesInput);
    div.appendChild(locationLabel);
    div.appendChild(locationInput);
    div.appendChild(baitLabel);
    div.appendChild(baitInput);
    div.appendChild(captureTimeLabel);
    div.appendChild(captureTimeInput);
    div.appendChild(updateBtn);
    div.appendChild(deleteBtn);

    return div;
}

function addCatch(e){
    e.preventDefault();
    const {angler, weight, species, location, bait, captureTime} = Object.fromEntries(new FormData(e.currentTarget));

    fetch('http://localhost:3030/data/catches', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify({
            angler,
            bait,
            captureTime,
            location,
            species,
            weight
        })
    })

    showCatches();
    e.currentTarget.reset();
}

function updateCatch(e){
    let data = e.currentTarget.parentElement
    let id = e.currentTarget.dataset.id
    let [angler, weight, species, location, bait, captureTime] = Array.from(data.querySelectorAll('input'))

    fetch(`http://localhost:3030/data/catches/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify({
            angler: angler.value,
            bait: bait.value,
            captureTime: captureTime.value,
            location: location.value,
            species: species.value,
            weight: weight.value
        })
    })
}

function deleteCatch(e){
    let id = e.currentTarget.dataset.id;

    fetch(`http://localhost:3030/data/catches/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': accessToken
        }
    })
}