// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
  const stringNumber = String(n);

  // create a rule where the length of digit equal one, return that number.
  if (stringNumber.length === 1) return n;

  // if the digit still above one, call the digital root function and do the digit function inside.
  // first, use the string form of number.
  // separate it with split function,
  // use the reduce array method to calculate one and another digit.

  return digital_root(
    stringNumber.split('').reduce((x, a) => Number(x) + Number(a))
  );
}

console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));
