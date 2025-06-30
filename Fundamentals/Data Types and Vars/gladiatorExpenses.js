function gladiatorExpenses(losesCount, priceHelmet, priceSword, priceShield, priceArmor){
    let expenses = 0;
    let brokenShieldCount = 0;
    
    for (let i = 1; i <= losesCount; i++){
        if (i % 2 === 0){
            expenses += priceHelmet;
        }

        if (i % 3 === 0){
            expenses += priceSword;
        } 

        if (i % 2 === 0 && i % 3 === 0){
            expenses += priceShield;
            brokenShieldCount++;
        }

        if (brokenShieldCount === 2){
            expenses += priceArmor;
            brokenShieldCount = 0;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(23,

    12.50,
    
    21.50,
    
    40,
    
    200)