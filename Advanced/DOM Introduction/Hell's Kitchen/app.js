function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const textAreaRef = document.querySelector("textarea").value;
      const bestRestaurantP = document.querySelector("#bestRestaurant p");
      const workersP = document.querySelector("#workers p");

      const restaurantData = JSON.parse(textAreaRef);
      let restaurants = {};

      for (let el of restaurantData){
         const [restaurantName, workersData] = el.split(" - ");
         const restaurantWorkers = workersData.split(", ").map(w => {
            const [name, salary] = w.split(" ");
            return { name, salary: Number(salary) };
         });

         if (!restaurants.hasOwnProperty(restaurantName)){
            restaurants[restaurantName] = [];
         }
         restaurants[restaurantName] = restaurants[restaurantName].concat(restaurantWorkers);
      }

      let bestRestaurant = '';
      let bestAvgSalary = 0;

      for (let name in restaurants) {
         const avgSalary = restaurants[name].reduce((a, b) => a + b.salary, 0) / restaurants[name].length;
         if (avgSalary > bestAvgSalary) {
            bestAvgSalary = avgSalary;
            bestRestaurant = name;
         }
      }

      const workers = restaurants[bestRestaurant].sort((a, b) => b.salary - a.salary);
      const bestSalary = workers[0].salary;

      bestRestaurantP.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      workersP.textContent = workers.map(w => `Name: ${w.name} With Salary: ${w.salary}`).join(' ');
   }
}