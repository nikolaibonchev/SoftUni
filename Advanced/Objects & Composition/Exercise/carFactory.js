function carFactory (obj){
    let car = {
        model: obj.model,
        engine: {},
        carriage: {
            type: obj.carriage,
            color: obj.color
        },
        wheels: []
    };

    if (obj.wheelsize % 2 !== 0){
        car.wheels = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize];
    } else {
        car.wheels = [obj.wheelsize - 1, obj.wheelsize - 1, obj.wheelsize - 1, obj.wheelsize - 1];
    }

    if (obj.power <= 90){
        car.engine = {power: 90, volume: 1800};
    } else if (obj.power <= 120){
        car.engine = {power: 120, volume: 2400};
    } else {
        car.engine = {power: 200, volume: 3500};
    }

    return car

}

console.log(carFactory({ model: 'VW Golf II',

    power: 90,
    
    color: 'blue',
    
    carriage: 'hatchback',
    
    wheelsize: 14 }));