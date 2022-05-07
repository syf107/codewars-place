// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function (n) {
  // change number into binary and then make it as array.
  return Number(
    [...n.toString(2)].reduce((prev, next) => parseInt(prev) + parseInt(next))
  );
};

console.log(countBits(1234));
console.log(countBits(0));
