function attachEvents() {
    const url = "http://localhost:3030/jsonstore/messenger";

    let submitBtn = document.getElementById('submit');
    let refreshBtn = document.getElementById('refresh');

    let [authorInput, contentInput] = document.querySelectorAll('input[type="text"]');

    submitBtn.addEventListener("click", sendMessage);
    refreshBtn.addEventListener('click', loadMessages);

    function sendMessage(){
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({author: authorInput.value, content: contentInput.value})
        })
        .catch(err => alert(err.message));

        authorInput.value = '';
        contentInput.value = '';
    }

    function loadMessages(){
        fetch(url)
        .then(res => res.json())
        .then(data => {
            let messages = Object.values(data).map(({author, content}) => `${author}: ${content}`).join('\n');
            document.getElementById('messages').textContent = messages;
            
        })
    }
}

attachEvents();