async function getInfo() {
    let busID = document.getElementById("stopId").value;
    let stopName = document.getElementById("stopName");
    let busesList = document.getElementById("buses");
    let url = `http://localhost:3030/jsonstore/bus/businfo/${busID}`;

    stopName.textContent = '';
    busesList.innerHTML = '';

    try {
        const res = await fetch(url);
        if (res.status !== 200) {
            throw new Error("Not Found");
        }
        const data = await res.json();
        stopName.textContent = data.name;

        for (let bus in data.buses) {
            let li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
            busesList.appendChild(li);
        }
    } catch (err) {
        stopName.textContent = 'Error';
    }
}