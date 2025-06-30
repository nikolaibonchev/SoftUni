function towns(arr){

    for (const string of arr){
        let city = string.split(" | ");
        let cityStats = {
            town: city.shift(),
            latitude: String(Number(city.shift()).toFixed(2)),
            longitude: String(Number(city.shift()).toFixed(2)),
        };

        console.log(cityStats);
    }

}

towns(['Plovdiv | 136.45 | 812.575']);