console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Master'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(4, 4));

// 4. Function to multiply three numbers & return the result
function multiplyThree(x, y, z) {
  return x * y * z;
}
console.log(multiplyThree(3, 3, 3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length > 0) {
    return array.length - 1;
  } 
  return 'undefined';
}
console.log(getLast([1, 2, 5]));
console.log(getLast([]));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array) {
  for (let item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
}
console.log(find(4, [1, 2, 4]));
console.log(find(4, [1, 2]));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let item = letter;
  if (item[0] === string[0]) {
      return true;
    }
  return false;
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array

// Almost had it finished
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i <= array.length; i++) {
  sum = i++;
  }
  return sum;
}
let array1 = [5, 3, 7, 6, 8, 9];
console.log(sumAll(array1));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//From Edabit: Find the Index Part 1
//Create a function that finds the index of a given item.

//Examples
//search([1, 5, 3], 5) ➞ 1

//search([9, 8, 3], 3) ➞ 2

//search([1, 2, 3], 4) ➞ -1
//Notes
//If the item is not present, return -1.

/* My Comments:

In this problem you are given a function called search that is called in which you are looking
for a particular number within the given array. If the number is found, it will
give you a positive number. If false, then a -1.
*/
// Unfinished
function search(array, item) {
  if (item === array.indexOf(index)) {
    return [index];
  }
}
console.log(search([1, 5, 3], 5));
console.log(search([9, 8, 3], 3));
console.log(search([1, 2, 3], 4));



