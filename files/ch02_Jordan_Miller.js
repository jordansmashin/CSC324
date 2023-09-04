// Problem 1 Looping a triangle

let hash = "#";
while (hash.length <= 7) {
    console.log(hash);
    hash = hash + "#";
}

// Problem 2 Fizzbuzz

let number = 0;
while (number <= 100) {
    if (number % 3 == 0 & number % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (number % 3 == 0) {
        console.log("Fizz");
    }
    else if (number % 5 == 0) {
        console.log("Buzz")
    }
    else console.log(number);
    number += 1
}

// Problem 3 chessboard
/* this problem took a little bit of help from stack overflow for me to figure out how to get the new lines to work
but it seems to be working now */

const height = 8;
const width = 8;
let chessboard = '';

for (let row = 0; row < height; row++) {
  for (let col = 0; col < width; col++) {
    if ((row + col) % 2 === 0) {
      chessboard += ' ';
    } else {
      chessboard += '#';
    }
  }
  chessboard += '\n';
}

console.log(chessboard);
