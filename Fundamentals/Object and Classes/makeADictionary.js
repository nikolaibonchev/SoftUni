function makeADictionary(arr){

    let dictionary = [];

    for (const entry of arr){
        let jsonOBJ = JSON.parse(entry)
        let objTerm = Object.keys(jsonOBJ);
        let objDefinition = Object.values(jsonOBJ)
        
        dictionary.push({Term: objTerm[0], Definition: objDefinition[0]});
    }

    dictionary.sort((a, b) => a.Term.localeCompare(b.Term));

    for (const element of dictionary){
        console.log(`Term: ${element.Term} => Definition: ${element.Definition}`);
    }
}

makeADictionary(['{"Cup":"A small bowl-shapedcontainer for drinking from,typically having a handle"}','{"Cake":"An item of soft sweetfood made from a mixture offlour, fat, eggs, sugar, andother ingredients, baked andsometimes iced or decorated."}','{"Watermelon":"The large fruitof a plant of the gourd family,with smooth green skin, redpulp, and watery juice."} ','{"Music":"Vocal or instrumentalsounds (or both) combined insuch a way as to produce beautyof form, harmony, and expressionof emotion."} ','{"Art":"The expression orapplication of human creativeskill and imagination, typicallyin a visual form such aspainting or sculpture, producing works to be appreciatedprimarily for their beauty oremotional power."} ']);