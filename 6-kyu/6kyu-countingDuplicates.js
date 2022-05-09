// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  // make the string goes lowercase first.
  const lowerCaseText = text.toLowerCase().split('');

  // create the object that will contain each letter.
  const letterAppearance = {};
  let sumOfMoreThanOne = 0;

  // if the letter is undefined, add one.
  lowerCaseText.forEach((letter, index) => {
    if (letterAppearance[letter]) {
      letterAppearance[letter]++;
    } else {
      letterAppearance[letter] = 1;
    }
  });
  for (const numberProperty in letterAppearance) {
    if (letterAppearance[numberProperty] > 1) {
      sumOfMoreThanOne++;
    }
  }
  return sumOfMoreThanOne;
}

console.log(duplicateCount('abcde')); // -> 0 # no characters repeats more than once
console.log(duplicateCount('aabbcde')); // -> 2 # 'a' and 'b'
console.log(duplicateCount('aabBcde')); // -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
console.log(duplicateCount('indivisibility')); // -> 1 # 'i' occurs six times
console.log(duplicateCount('Indivisibilities')); // -> 2 # 'i' occurs seven times and 's' occurs twice
console.log(duplicateCount('aA11')); // -> 2 # 'a' and '1'
console.log(duplicateCount('ABBA')); // -> 2 # 'A' and 'B' each occur twice
