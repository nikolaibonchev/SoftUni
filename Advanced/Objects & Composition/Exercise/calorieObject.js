function calorieObject (arr){
    let calorie = {};
    let food = "";

    for (let i = 0; i < arr.length; i+=2){
        food = arr[i];
        calorie[food] = Number(arr[i+1]);
    }

    console.log(calorie);
}

calorieObject(['Yoghurt', '48', 'Rise', '138',

    'Apple', '52'])