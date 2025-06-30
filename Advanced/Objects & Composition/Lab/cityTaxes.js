function cityTaxes(name, population, treasury){
    const city = {
        name,
        population,
        treasury,
        taxRate: 10,

        collectTaxes() { 
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor((percentage / 100) * this.population);
        },
        applyRecession(percentage){
            this.treasury -= Math.ceil((percentage / 100) * this.treasury);
        }
    }

    return city;
}

console.log(
 cityTaxes('Tortuga',7000,15000));