// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  let newString = '';
  for (let i = 0; i < message.length; i++) {
    if (
      message[i] === message[i].toLowerCase() &&
      message[i].match(/[a-z]+/g)
    ) {
      let cipheredLowerCase = message[i].charCodeAt(0) - 97 + 13;
      newString += String.fromCharCode(
        97 +
          (cipheredLowerCase >= 26 ? cipheredLowerCase % 26 : cipheredLowerCase)
      );
    } else if (
      message[i] === message[i].toUpperCase() &&
      message[i].match(/[A-Z]+/g)
    ) {
      let cipheredLowerCase = message[i].charCodeAt(0) - 65 + 13;
      newString += String.fromCharCode(
        65 +
          (cipheredLowerCase >= 26 ? cipheredLowerCase % 26 : cipheredLowerCase)
      );
    } else {
      newString += message[i];
    }
  }
  return newString;
}

console.log(rot13('test'));
console.log(rot13('abcdefghijklmnopqrstuvwxyz'));
console.log(rot13);
