function inventory(arr){

    let heroInventory = [];

    for (let input of arr){
        const tokens = input.split(' / ');
        let heroName = tokens[0];
        let heroLevel = Number(tokens[1]);
        let heroItems = tokens[2];
        
        heroInventory.push({name: heroName, level: heroLevel, items: heroItems});

    }

    heroInventory.sort((a, b) => a.level - b.level);
    
    for (const heroStats of heroInventory){
        console.log(`Hero: ${heroStats.name}`);
        console.log(`level => ${heroStats.level}`);
        console.log(`items => ${heroStats.items}`);
    }
}

inventory(['Batman / 2 / Banana, Gun','Superman / 18 / Sword','Poppy / 28 / Sentinel, Antara']);