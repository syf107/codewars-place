// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  const lowercaseStr = str.toLowerCase();

  for (let i = 0; i < lowercaseStr.length; i++) {
    let letter = lowercaseStr[i];
    for (let j = 0; j < lowercaseStr.length; j++) {
      if (i === j) {
        continue;
      } else if (letter === lowercaseStr[j] || !lowercaseStr) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
