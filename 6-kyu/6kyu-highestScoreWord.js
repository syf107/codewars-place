// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  const arrayOfX = x.split(' ');
  let scoreOfWords, maxWord, currentScore, currentWord;

  //   iterating each and every word inside the string.
  for (let i = 0; i < arrayOfX.length; i++) {
    currentScore = 0;
    currentWord = arrayOfX[i];

    //   make the iteration to each array and add it to the score.
    for (let j = 0; j < arrayOfX[i].length; j++) {
      currentScore += arrayOfX[i][j].charCodeAt(0) - 96;
    }

    // if the score is undefined or the scoreof word is lesser than current score, then change it.
    if (maxWord === undefined || scoreOfWords < currentScore) {
      maxWord = currentWord;
      scoreOfWords = currentScore;
    }
  }
  return maxWord;
}
