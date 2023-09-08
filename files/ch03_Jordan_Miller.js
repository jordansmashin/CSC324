// Problem 1 Minimum

let min = function(num1, num2) {
    if (num1 < num2) {
        console.log(num1)
    }
    else {
        console.log(num2)
    }
}
min(0,-10)

// Problem 2 Recursion 

function isEven(num) {
    if (num < 0) {
      return "Please provide a valid whole number"; 
    } else if (num === 0) {
      return true; 
    } else if (num === 1) {
      return false; 
    } else {
      return isEven(num - 2);
    }
  }
  console.log(isEven(50))
  
// Problem 3 Bean Counting

function countBs(str) {
    return countChar(str, 'B');
  }
  
  function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  console.log("the number of B's are", countBs("Bean counting is Better with Big B's"));
  console.log(countChar("Bean counting is Better with Big B's", "e"))
  
/* though I don't think it was neccessary I tried to format the response to say the letter that they were counting
but had trouble with the countchar one since char is defined in the function and not beforehand */