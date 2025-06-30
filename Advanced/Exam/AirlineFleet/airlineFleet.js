class AirlineFleet {
    budget
    planes = [];
    completedFlights = [];

    constructor(num){
        this.budget = num;
    }

    addPlane(model, cost, capacity, fuelConsumption){
        if(cost > this.budget) return `Not enough budget to add '${model}' plane.`;

        this.planes.push({model, cost, capacity, fuelConsumption});
        return `The plane '${model}' has been successfully added to the airline fleet.`;
    }

    scheduleFlight(destination, ticketPrice, requiredFuel, passengers){
        if (this.planes.length === 0) throw Error("No planes available for scheduling flights.");

        let suitablePlane = this.planes.some(plane => plane.fuelConsumption <= requiredFuel);

        if (!suitablePlane) {
            return `Not enough fuel capacity to reach ${destination}.`;
        }

        let revenue = ticketPrice * passengers;
        this.budget += revenue;
        this.completedFlights.push({destination, ticketPrice, requiredFuel, passengers});
        return `Flight to ${destination} completed successfully. Revenue: $${revenue}.`;
    }

    getPlanesByCapacity(minCapacity){
        if(minCapacity <= 0) return `The capacity must be a positive number.`;
        let count = 0;

        for(let plane of this.planes){
            if(plane.capacity >= minCapacity){
                count++;
            }
        }

        if (count > 0){
            return `You have ${count} planes with capacity ${minCapacity} or higher.`;
        } else {
            return `No planes found with capacity ${minCapacity} or higher.`;
        }
    }

    airlineSummary(){
        if(this.completedFlights.length === 0) throw Error("No flights have been completed yet!");

        return `Budget left $${this.budget}. \nYou have completed ${this.completedFlights.length} flights. \nAirline fleet: \n${this.planes.map(plane =>
            `${plane.model} - Cost: ${plane.cost}, Capacity: ${plane.capacity}, Fuel Consumption: ${plane.fuelConsumption}`
          ).join('\n')}
        `
    }
}

let airline = new AirlineFleet(1000000); 

console.log(airline.addPlane("Boeing 737", 300000, 180, 5000)); 

console.log(airline.addPlane("Airbus A320", 250000, 160, 4800)); 

console.log(airline.scheduleFlight("London", 600, 9000, 180)); 

console.log(airline.scheduleFlight("Berlin", 550, 8000, 160)); 

console.log(airline.airlineSummary()); 