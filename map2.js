let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Square each number in the array
// Filter the resulting array by numbers larger than 30
// For each remaining element, print a string declaring it larger than 30
// e.g. "36 is larger than 30"

//Your code here

// Squaring numbers
let squaredNumbers = numbers.map(number => number*number)

// Filtering array
let filteredArray = squaredNumbers.filter(number => number > 30)

// Print a string
filteredArray.forEach(number => console.log(`${number} is larger than 30.`))

// Combined
numbers.map(number => number*number).filter(number => number > 30).forEach(number => console.log(`${number} is larger than 30.`))

// Or

numbers.map
(number => number*number).filter
(number => number > 30).forEach
(number => console.log(`${number} is larger than 30.`))