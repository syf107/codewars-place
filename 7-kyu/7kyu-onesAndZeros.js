// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = (arr) => {
  // reverse the array to get the increasing index
  // use reduce function accu as container, binary as the array elements, and index.
  // add accu with 2 to the power of index to get the each value of binary digits.
  // multiply it with the array element binary to see the value.
  return arr.reverse().reduce((accu, binary, index) => {
    // console.log(binary, index);
    return accu + binary * 2 ** index;
  }, 0);
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); // ==> 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // ==> 2
console.log(binaryArrayToNumber([0, 1, 0, 1])); // ==> 5
console.log(binaryArrayToNumber([1, 0, 0, 1])); // ==> 9
console.log(binaryArrayToNumber([0, 0, 1, 0])); // ==> 2
console.log(binaryArrayToNumber([0, 1, 1, 0])); // ==> 6
console.log(binaryArrayToNumber([1, 1, 1, 1])); // ==> 15
console.log(binaryArrayToNumber([1, 0, 1, 1])); // ==> 11
