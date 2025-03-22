// Task 1: Using forEach()
let favCities = ["Austin", "St. Louis", "Nashville", "Seattle", "Chicago"];
favCities.forEach((city) => {
    console.log(city.toUpperCase()); 
});
/* logs the following:
AUSTIN
ST. LOUIS
NASHVILLE
SEATTLE
CHICAGO
*/

// Task 2: Transforming with map()
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);
console.log(squares);
/* logs the following:
[ 1, 4, 9, 16, 25 ]
*/

// Task 3: Filtering with filter()
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);
console.log(highScores);
/* logs the following:
[ 85, 90, 100 ]
 */

// Task 4: Finding with find() and findIndex()
let favoriteFood = ["Brie", "Chicken Chimichangas", "Fettucini Alfredo", "Pizza", "Chips & Salsa"];
let firstLongFood = favoriteFood.find(food => food.length > 4);
let foodIndex = favoriteFood.findIndex(food => food.length > 4);
console.log(firstLongFood);
console.log(foodIndex);