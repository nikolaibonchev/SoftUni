function lowestPricesInCities (arr){
    let productList = [];

    for (let el of arr){
        let [city, product, price] = el.split(' | ');
        price = Number(price);

        if (!productList.hasOwnProperty(product)){
            productList[product] = {city, price};
        } else {
            if (productList[product].price > price){
                productList[product] = {city, price};
            }
        }
    }

    for (let product in productList){
        console.log(`${product} -> ${productList[product].price} (${productList[product].city})`);
    }
}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);