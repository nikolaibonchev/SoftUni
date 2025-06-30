function requiredReading(pages, pagePerHour, days){
    let totalTime = pages / pagePerHour;
    let hoursPerDay = totalTime / days;

    console.log(hoursPerDay.toFixed(1));
}

requiredReading(432,

    15 ,
    
    4)