// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  // make the string input into lowercase
  const lowercaseStr = str.toLowerCase();

  //   make container to count letter o and z
  let oAmount = 0;
  let zAmount = 0;

  //   using spread operator to iterate it using foreach.
  [...lowercaseStr].forEach((char) => {
    if (char === 'o') {
      oAmount++;
    } else if (char === 'x') {
      zAmount++;
    }
  });
  //   console.log(oAmount, zAmount);

  //   conditional statement, if the amount is similar, return true.
  // else return false.
  if (oAmount === zAmount) {
    return true;
  } else {
    return false;
  }
}

console.log(XO('ooxx'));
console.log(XO('xooxx'));
console.log(XO('ooxXm'));
console.log(XO('zpzpzpp'));
console.log(XO('zzoo'));
