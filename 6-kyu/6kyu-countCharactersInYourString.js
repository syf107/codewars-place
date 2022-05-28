//www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  const countObject = {};

  for (let i = 0; i < string.length; i++) {
    countObject[string[i]] === undefined
      ? (countObject[string[i]] = 1)
      : countObject[string[i]]++;
  }

  return countObject;
}

console.log(count('false alarm'));
