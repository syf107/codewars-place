// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i - 1] && numbers[i] !== numbers[i + 1])
      return numbers[i];
  }
}

stray([1, 1, 2]); //==> 2
stray([17, 17, 3, 17, 17, 17, 17]); //==> 3
