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

let gridSize = 8;
while (gridSize <= gridSize * gridSize) {
height = gridSize;
width = gridSize;

}