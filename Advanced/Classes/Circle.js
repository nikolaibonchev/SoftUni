class Circle {
    radius = 0;

    constructor(num){
        this.radius = num;
    }

    get diameter(){
        return this.radius * 2;
    }

    get area(){
        return (this.diameter * Math.PI).toFixed(2); 
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);