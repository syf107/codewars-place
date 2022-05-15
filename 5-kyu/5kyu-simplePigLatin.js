// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //make the the sentence string into array of words.
  // use map function to switch the first and last word, then add ay.
  const result = str
    .split(' ')
    .map((word) => {
      return !word.match(/^[.,:!?]/) ? word.slice(1) + word[0] + 'ay' : word;
    })
    .join(' ');
  return result;
}

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !'); // elloHay orldway !
