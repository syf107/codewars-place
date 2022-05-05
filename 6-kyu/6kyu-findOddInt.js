// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  //   create set of unique character from an array.
  const uniqueA = [...new Set(A)];
  //   create the object to contain each number.

  //   iterate over each unique character to count the number.
  //   console.log(uniqueA);
  let answer;
  uniqueA.forEach((uniqueNumber) => {
    const uniqueAmount = A.filter((x) => x === uniqueNumber).length;
    // console.log(uniqueAmount);
    if (uniqueAmount % 2 === 1) answer = uniqueNumber;
  });
  return answer;
}

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
// findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
