// Flattening

const arrayOfArrays = [[1, 2, 3], [4, 5], [6, 7, 8]];

const flattenedArray = arrayOfArrays.reduce(function(accumulator, currentArray) {
  return accumulator.concat(currentArray);
}, []);

console.log(flattenedArray);

/* this code uses the reduce method to iterate over each part of all the arrays and combine them into one value,
accumulator, and then use the concat method to concactanate the current array to the accumulator we just made
*/

// Your own loop

function loop(value, testFn, updateFn, bodyFn) {
    for (let current = value; testFn(current); current = updateFn(current)) {
      bodyFn(current);
    }
  }
  
  loop(5, n => n > 0, n => n - 1, console.log);
  
/* This function takes the value that the user provides and like a for loop, it iterates over the body until the
current value reaches 0. This is done by first having test function check to see if the value provided
is already equal to the current value and if not it then goes to the update function which takes 1 off of the 
current value, allowing for the function to eventually stop
*/

// Everything

// loop method

function everyLoop(array, predicateFN) {
    for (let element of array) {
      if (!predicateFN(element)) {
        return false;
      }
    }
    return true;
  }
  
  let numbers = [2, 4, 6, 8];
  let allEven = everyLoop(numbers, (num) => num % 2 === 0);
  console.log(allEven);
  
/* this function takes the array and compares every element in it with the predicate function, in my example 
allEven, and if any of the elements evaluate as false then it returns false, and if they are all true it returns
true. 
*/

// some method

function everySome(array, predicateFN) {
  return !array.some((element) => !predicateFN(element));
}

let numbers = [1, 2, 3, 4, 5];
let allEven = everySome(numbers, (num) => num % 2 === 0);
console.log(allEven);

/*
In this version, we use the some method to check if there is an element in the array for which the predicate 
function returns false. We then negate the result of array.some to achieve the behavior of the every function.
*/