function solve() {
    let arriveBtn = document.getElementById("arrive");
    let departBtn = document.getElementById("depart");
    let infoField = document.querySelector('.info');
    
    let stop = {
        next: "depot"
    }

    function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                stop.name = data.name;
                stop.next = data.next;
                infoField.textContent = `Next stop ${stop.name}`;
                arriveBtn.disabled = false;
                departBtn.disabled = true;
            })
            .catch(err => {
                console.log(err);
            });
    }

    function arrive() {
        infoField.textContent = `Arriving at ${stop.name}`;
        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();