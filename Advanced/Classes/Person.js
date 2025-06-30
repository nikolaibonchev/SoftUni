//This is answear to both 1 and 2

class Person {
    constructor(firstName = '', lastName = '', age = 0, email = ''){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let personInstances = [];

const personAnna = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
const personSoft = new Person('SoftUni');
const personStephan = new Person('Stephan', 'Johnson', 25);
const personGabriel = new Person('Gabriel', 'Peterson', 25, 'g.p@gmail.com');

personInstances.push(personAnna, personSoft, personStephan, personGabriel)
console.log(personInstances);
