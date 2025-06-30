function daysInTheMonth(month, year){
    return new Date(year, month, 0).getDate();
}

daysInTheMonth(1, 2021)