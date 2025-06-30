const url = `http://localhost:3030/jsonstore/collections/students`;
const [firstNameInput, lastNameInput, fNumInput, gradeInput] = document.querySelectorAll('input[type="text"]');
const submitBtn = document.getElementById('submit');
const tbody = document.querySelector('tbody');

fetch(url)
.then(res => res.json())
.then(data => {
    Object.values(data).forEach(obj => {
        const {facultyNumber, firstName, grade, lastName, _id} = obj;
        createTableRows(firstName, lastName, facultyNumber, grade, _id);
    })
})
.catch(err => alert(err.message));

submitBtn.addEventListener('click', (e)=>{
    let checkData = fNumInput.value === '' && firstNameInput.value === '' && lastNameInput.value === '' && gradeInput.value === '';
    if (checkData) return;

    fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({facultyNumber: fNumInput.value, 
                            firstName: firstNameInput.value, 
                            grade: gradeInput.value,
                            lastName: lastNameInput.value})
    })
    .catch(err => alert(err.message));

    fNumInput.value = '';
    firstNameInput.value = '';
    lastNameInput.value = '';
    gradeInput.value = '';
})

function createTableRows(firstName, lastName, fNum, grade, id){
    const tr = document.createElement('tr');
        tr.setAttribute('id', `${id}`);

        const firstNameCell = tr.insertCell(0);
        firstNameCell.textContent = firstName;

        const lastNameCell = tr.insertCell(1);
        lastNameCell.textContent = lastName;

        const fNumCell = tr.insertCell(2);
        fNumCell.textContent = fNum;

        const gradeCell = tr.insertCell(3);
        gradeCell.textContent = Number(grade).toFixed(2);

        tbody.appendChild(tr)
}
