function employees(names){

    for (const employees of names){
        let employeesList = {};
        employeesList.name = employees;
        employeesList.num = employees.length;

        console.log(`Name: ${employeesList.name} -- Personal Number: ${employeesList.num}`);
    }

}

employees(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);