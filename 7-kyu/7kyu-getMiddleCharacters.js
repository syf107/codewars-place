// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

function getMiddle(s) {
  //Code goes here!
  //   make the container to input the middle character
  let middleChar = "";

  //   create formula to find the middle character.
  //   if the string length is odd, add only the first of middle character.
  let midFormula = Math.floor((s.length - 1) / 2);
  // else, which is the even number, add the middle and the next one.
  return s.substr(midFormula, s.length % 2 === 1 ? 1 : 2);
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
