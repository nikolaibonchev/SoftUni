function sortAnArrayBy2Criteria(arr){
    console.log(arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n"));
}

sortAnArrayBy2Criteria(['alpha','beta','gamma'])