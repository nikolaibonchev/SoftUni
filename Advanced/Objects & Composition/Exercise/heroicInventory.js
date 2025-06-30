function heroicInventory (arr){
    let heroesArr = [];
    for (let el of arr){
        let [name, level, itemsArr] = el.split(' / ');
        let items = itemsArr ? itemsArr.split(', ') : [];

        let hero = {};

        hero.name = name;
        hero.level = Number(level);
        hero.items = items;

        heroesArr.push(hero);
    }

    let AlphaJudgeISTRASH = heroesArr.pop();
    console.log(JSON.stringify(heroesArr));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara']);


/*[
    {"name":"Isacc","level":25,"items":["Apple","GravityGun"]},
    {"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},
    {"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}
] */