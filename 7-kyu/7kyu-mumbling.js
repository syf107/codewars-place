// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  // your code
  //   create container to store generated letter.
  let container = [];

  //   change the string into lowercase and array.
  String(s.toLowerCase())
    .split('')
    // iterate each array and generate repeated letter based on array.

    .forEach((letter, index) => {
      // the place to store new repeated generated letter.
      let newWord = '';
      for (let i = 0; i < index + 1; i++) {
        newWord += letter;
      }
      //   push the letter generated into the new container but with capital first letter.
      container.push(newWord.charAt(0).toUpperCase() + newWord.slice(1));
    });

  // return the container that is joined with -
  return container.join('-');
}

console.log(accum('abcd'));
