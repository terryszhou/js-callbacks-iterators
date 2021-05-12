
// (1) Use the .forEach iterator to loop over the following array of foods and say you like them.

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"
 
let foods = ["pizza", "tacos", "ice cream", "sushi"];

// your code here

let foodsILike = foods.forEach(food => console.log(`I like ${food}.`))

// OR

// let foodsILike2 = foods.filter(food => food !== "sushi")

let foodsILike3 = (foods.filter(food => food !== "sushi")).forEach(food => console.log(`I like ${food}.`))
