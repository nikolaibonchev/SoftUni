function fruit(fruit, weigth, pricePerKG){
    let weigthInKG = weigth / 1000;
    let fullPrice = weigthInKG * pricePerKG;

    console.log(`I need $${fullPrice.toFixed(2)} to buy ${weigthInKG.toFixed(2)} kilograms of ${fruit}.`);
    
}

fruit('orange', 2500, 1.80)