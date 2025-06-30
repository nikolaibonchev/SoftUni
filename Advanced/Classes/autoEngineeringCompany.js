function autoEngineeringCompany(arr){
    const carRegisty = new Map;

    for (let string of arr){
        const [carBrand, carModel, producedCars] = string.split(' | ');

        if(!carRegisty.has(carBrand)){
            carRegisty.set(carBrand, new Map);
        }

        let brandGetter = carRegisty.get(carBrand);
        brandGetter.set(carModel, (brandGetter.get(carModel) || 0) + producedCars);

    }

    for (let [brand, models] of carRegisty){
        console.log(brand);
        for (let [model, count] of models){
            console.log(`###${model} -> ${count}`);
        }
    }

}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',       
    'BMW | X6 | 100',        
    'Citroen | C4 | 123',       
    'Volga | GAZ-24 | 1000000',        
    'Lada | Niva | 1000000',        
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);