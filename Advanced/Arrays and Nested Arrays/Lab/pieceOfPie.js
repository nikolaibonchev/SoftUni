function pieceOfPie(arr, flavorOne, flavorTwo){
    let startIndex = arr.indexOf(flavorOne);
    let endIndex = arr.indexOf(flavorTwo);

    return arr.slice(startIndex, endIndex + 1);
    
}

console.log(
 pieceOfPie(['Apple Crisp', 

    'Mississippi Mud Pie', 
   
    'Pot Pie', 
   
    'Steak and Cheese Pie', 
   
    'Butter Chicken Pie', 
   
    'Smoked Fish Pie'], 
   
   'Pot Pie', 
   
   'Smoked Fish Pie' ));