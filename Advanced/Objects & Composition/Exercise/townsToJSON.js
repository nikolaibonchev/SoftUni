function townsToJSON (arr){
    let properties = arr.shift();
    let [_1, town, _2, latitude, _3, longitude] = properties.split(" ");
    let objectArr = [];

    for (let el of arr){
        let townInfo = el.split("|").map(info => info.trim());
        let townLatitude = Number(townInfo[2]).toFixed(2);
        let townLongitude = Number(townInfo[3]).toFixed(2);

        let city = {
            [town]: townInfo[1],
            [latitude]: Number(townLatitude),
            [longitude]: Number(townLongitude)
        }

        objectArr.push(city)
    }
    
    console.log(JSON.stringify(objectArr));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);