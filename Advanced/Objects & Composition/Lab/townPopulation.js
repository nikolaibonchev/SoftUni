function townPopulation (arr){
    const population = {};

    for (let el of arr){
        let [city, pop] = el.split(" <-> ");
        
        pop = Number(pop);

        if (population.hasOwnProperty(city)){
            population[city] += pop;
        } else {
            population[city] = pop;
        }
    }

    for (let keys in population){
        console.log(`${keys}: ${population[keys]}`);
    }

}

townPopulation(['Istanbul <-> 100000','Honk Kong <-> 2100004','Jerusalem <-> 2352344','Mexico City <-> 23401925','Istanbul <-> 1000']);