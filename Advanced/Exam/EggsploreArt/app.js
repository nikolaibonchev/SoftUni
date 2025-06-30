window.addEventListener('load', solve);

function solve() {
    const createBtn = document.querySelector('#create-btn')
    
    createBtn.addEventListener("click", createEgg);

    function createEgg(e){
        e.preventDefault()
        document.querySelector('#complete-img').style.display = 'none';
        document.querySelector('#complete-text').textContent = '';

        let inputs = Array.from(document.querySelector('form').querySelectorAll('input'));
        const labels = ['Egg Type:', 'Size:', 'Base Color:', 'Pattern:', 'Decorations:'];

        const list = document.querySelector(".review-list");
        const infoContainer = document.querySelector(".info-container");
        const li = document.createElement('li');
        li.setAttribute('class', 'egg-content');
        const article = document.createElement('article')

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.setAttribute('class', 'edit-btn')

        const continueBtn = document.createElement('button');
        continueBtn.textContent = 'Countinue';
        continueBtn.setAttribute('class', 'continue-btn')

        for(let i = 0; i < 5; i++){
            let p = document.createElement('p');
            p.textContent = `${labels[i]} ${inputs[i].value}`;
            article.appendChild(p);
            inputs[i].value = '';
        };

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);
        list.appendChild(li);
        createBtn.disabled = true;

        editBtn.addEventListener('click', editEgg);
        continueBtn.addEventListener('click', acceptEgg);
    }

    function editEgg(e){
        e.preventDefault();
        let inputs = document.querySelector('form').querySelectorAll('input')
        let eggReview = Array.from(document.querySelectorAll('p'));
        eggReview.pop();
        let eggsDesrcb = eggReview.map((descrb) => descrb.textContent.split(": "))

        for (let i = 0; i < 5; i++){
            inputs[i].value = eggsDesrcb[i][1];
        }
        
        createBtn.disabled = false;
        document.querySelector('li').remove()
    }

    function acceptEgg(e){
        e.preventDefault();
        const article = document.querySelector('article');
        const confirmList = document.querySelector('.confirm-list');

        const confirmBtn = document.createElement('button');
        confirmBtn.setAttribute('class', 'confirm-btn');
        confirmBtn.textContent = 'Confirm';

        const cancelBtn = document.createElement('button');
        cancelBtn.setAttribute('class', 'cancel-btn');
        cancelBtn.textContent = 'Cancel';

        const newLi = document.createElement('li');
        newLi.setAttribute('class', 'egg-content');

        newLi.appendChild(article);
        newLi.appendChild(confirmBtn);
        newLi.appendChild(cancelBtn);

        confirmList.appendChild(newLi);
        document.querySelector('li').remove();

        confirmBtn.addEventListener("click", confirmDesign);
        cancelBtn.addEventListener('click', cancelDesigns)
    }

    function confirmDesign(e){
        e.preventDefault();
        document.querySelector('li').remove();
        createBtn.disabled = false;
        document.querySelector('#complete-img').style.display = 'block';
        document.querySelector('#complete-text').textContent = 'Your egg is ready!';
    }

    function cancelDesigns(e){
        e.preventDefault();
        document.querySelector('li').remove();
        createBtn.disabled = false;
        document.querySelector('#complete-img').style.display = 'none';
        document.querySelector('#complete-text').textContent = '';
    }
}