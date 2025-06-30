class Ticket {
    constructor(des, pri, stat){
        this.destination = des;
        this.price = pri;
        this.status = stat;
    }
}

function getTickets(dataArr, sorting){
    const tixRegistry = [];

    for (let string of dataArr){
        let [destination, price, status] = string.split('|');

        tixRegistry.push(new Ticket(destination, price, status));
    }

    sorting === "price" ? tixRegistry.sort((a, b) => a[sorting] - b[sorting]) : tixRegistry.sort((a, b) => a[sorting].localeCompare(b[sorting]));
    console.log(tixRegistry);
}

getTickets(
    ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],

    'status')