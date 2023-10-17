/*
Write a function named fizzBuzz that takes in two(2) parameters which are expected to be strings.
 The function should return the string Fizz if the combined length of the parameters is divisible by 3, 
 the string Buzz if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and 3.
*/

function fizzBuzz(str1, str2) {
    const combinedLength = str1.length + str2.length;
    
    if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
      return "FizzBuzz";
    } else if (combinedLength % 3 === 0) {
      return "Fizz";
    } else if (combinedLength % 5 === 0) {
      return "Buzz";
    } else {
      return "Neither Fizz nor Buzz";
    }
  }

  //Tests
  console.log(fizzBuzz("Sam","Paul")); //Non of the conditions met.
  console.log(fizzBuzz("Sammy","PaulWalker")); //Divisible by 3 and 5
  console.log(fizzBuzz("Sam","Dan")); //Divisible by 3
  console.log(fizzBuzz("Paul","Walker")); //Divisible by 5