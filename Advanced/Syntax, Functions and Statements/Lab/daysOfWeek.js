function daysOfWeek(day){
    switch(day){
        case 'Monday':
            console.log(1);
            break;
        case 'Tuesday':
            console.log(2);
            break;
        case 'Wednesday':
            console.log(3);
            break;
        case 'Thursday':
            console.log(4);
            break;
        case 'Friday':
            console.log(5);
            break;
        case 'Saturday':
            console.log(6);
            break;
        case 'Sunday':
            console.log(7);
            break;
        default:
            console.log("error");
            break;
    }
}

daysOfWeek("Monday")
daysOfWeek("Tuesday")
daysOfWeek("Wednesday")
daysOfWeek("Thursday")
daysOfWeek("Friday")