// The sum of a range

function range(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }

  console.log(range(1, 10));

  /* this function takes the starting parameter in the array and runs a for loop that checks if i 
  (the current number in the array) is less than or equal to the end parameter, and if it isn't then it pushes
  the number and then keeps going until it does */

  function range(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }

  function sum(numbers) {
    return numbers.reduce((total, number) => total + number, 0);
  }

  console.log(sum(range(1, 10)));

  /* when you combine these two functions you get the range being the parameter for the sum function which uses
  the reduce function in order to iterate over the array and return a single value for them. the 0 is the starting
  value for the total in the callback function and the number parameter is the current element being processed */

  // Reversing an array

  // Part A reversing a array without changing the original

function reverseArray(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
      reversed.push(array[i]);
    }
    return reversed;
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const result = reverseArray(originalArray);
  console.log(result);

  /* This function takes an original array and then iterates from the end of the array to the beginning, pushing
   each element to a new array as it does */

  // Part B reversing the array while changing the original to the reverse

  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      const tempArray = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = tempArray;
    }
  }

  const arrayToReverseInPlace = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayToReverseInPlace);
  console.log(arrayToReverseInPlace);
 
  /* this function only iterates through half of the array since it will be swapping both end from the center,
  as it goes through it swaps one end of the array with its counterpart on the other end, effectively reversing
  it in place */

  /* stack overflow was very useful in suggesting that i use math.floor in order to determine how many iterations
  the function needed to do in order to reach the center without including the center itself by rounding to the
  nearest integer. This allows for the function to work whether the array is odd or even */
