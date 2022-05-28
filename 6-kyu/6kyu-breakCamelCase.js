// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
  const splittedString = [...string];
  for (let i = 0; i < splittedString.length; i++) {
    // console.log(splittedString);
    if (splittedString[i] === splittedString[i].toUpperCase()) {
      splittedString.splice(i, 0, ' ');
      i++;
    }
  }
  return splittedString.join('');
}

console.log(solution('camelCasing')); //  =>  "camel Casing"
console.log(solution('identifier')); //  => "identifier"
console.log(solution('')); //  =>  ""
