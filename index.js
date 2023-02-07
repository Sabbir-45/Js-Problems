// Assignment 4

// Problem 1
// This function takes in a positive number and then multiplies 3 to it, takes the result and adds 10, takes the new result and divides it by 2 and finally subtracts 5 from the new result and returns it. The function will only take positive integers, no strings are allowed.
function mindGame(number) {
    // Since the question asked me to take positive numbers so I am handling exception for negative numbers and floats as well
    const type = typeof number;
    //This line checks for empty parameter as well.
    if (number < 0 || number % 1 !== 0 || type !== "number")
      return "Please enter a positive number!";
    return (number * 3 + 10) / 2 - 5;
  }


  // Problem 2
// This function takes in a string only and then counts the number of characters in it and returns even if the number is even or returns odd if the number is odd.
function evenOdd(word) {
    const type = typeof word;
    //This line checks for empty parameter as well.
    if (type !== "string" || word.length === 0) return "Please enter a word!";
  
    if (word.length % 2 === 0) return "Even";
    else return "Odd";
  }