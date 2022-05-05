// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
  // make each word inside the string into an array.
  // apply to each array value, if the letters of word are 5 or more, reverse it.
  //   how to reverse? split that specified word, use reverse and join method.
  //  if it doesn't just make it normal word.
  //  after all, join the array of words into string again.
  return string
    .split(' ')
    .map((word) =>
      word.length >= 5 ? word.split('').reverse().join('') : word
    )
    .join(' ');
}

console.log(spinWords('Hey fellow warriors'));
console.log(spinWords('This is a test'));
console.log(spinWords('This is another test'));
