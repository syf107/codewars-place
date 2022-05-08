// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

function findChildren(dancingBrigade) {
  const arrangedArray = [...dancingBrigade].sort((a, b) => a.localeCompare(b));

  let motherColony, childColony;
  //   loop each character.
  arrangedArray.forEach((letter, index) => {
    //   if the mother is undefined or the mother met new different character, then define the mother.
    if (
      motherColony === undefined ||
      motherColony.toLowerCase() !== letter.toLowerCase()
    ) {
      motherColony = letter.toUpperCase();
      arrangedArray[index] = motherColony;
      //   if the letter in lowercase similar with the mother in lowercase, then add the child.
    } else if (motherColony.toLowerCase() === letter.toLowerCase()) {
      childColony = letter.toLowerCase();
      arrangedArray[index] = childColony;
    }
  });
  return arrangedArray.join('');
}

console.log(findChildren('aAbaBb'));
console.log(findChildren('AaaaaZazzz'));
console.log(findChildren('uwwWUueEe'));
console.log(findChildren('abBA'));
console.log(findChildren('CbcBcbaA'));
console.log(findChildren('beeeEBb'));
