// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// function order(words) {
//   const re = /[0-9]/gm;
//   const splittedWords = words
//     // first split the word into an array of words.
//     .split(' ')
//     // make a map function to extract number, and pair it with the word.
//     .map((word) => [Number(word.match(re)), word])
//     // after sorted it, take only the word with number.
//     .sort()
//     .map((word) => word[1])
//     // then join
//     .join(' ');
//   return splittedWords;
// }

function order(words) {
  const re = /\d/;
  const splittedWords = words
    .split(' ')
    .sort((a, b) => a.match(re) - b.match(re));
  return splittedWords;
}

console.log(order('is2 Thi1s T4est 3a'));
