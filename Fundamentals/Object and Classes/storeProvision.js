function storeProvision(stocks, ordered) {
    let store = {};

    for (let i = 0; i < stocks.length; i += 2) {
        let product = stocks[i];
        let quantity = Number(stocks[i + 1]);
        store[product] = quantity;
    }

    for (let i = 0; i < ordered.length; i += 2) {
        let product = ordered[i];
        let quantity = Number(ordered[i + 1]);

        if (store[product] !== undefined) {
            store[product] += quantity;
        } else {
            store[product] = quantity;
        }
    }

    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30']);