class Vehicle{
    constructor (type, model, parts, fuel ){
        this.type = type;
        this.model = model;
        this.fuel = fuel;

        parts.quality = parts.engine * parts.power;
        this.parts = parts;
    }

    drive(num){
        this.fuel -= num;
    }
}

let parts = {engine: 9, power: 500};
let vehicle = new Vehicle('l', 'k', parts, 840);
vehicle.drive(20);
console.log(vehicle.type);