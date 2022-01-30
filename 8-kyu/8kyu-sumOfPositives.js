/*
https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

Instruction
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

// Solution
function positiveSum(arr) {
  
  // create a variable to store the total number.
  let sumPositive = 0;

  // make the loop through the array.
  for (let i = 0; i < arr.length; i++) {

    // if the number is bigger than 0, which is not negative, add it to the variable.
    if (arr[i] > 0) sumPositive += arr[i];
  }

  return sumPositive;
}

console.log(positiveSum([1, -2, 2, 3]));

