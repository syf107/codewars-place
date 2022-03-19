// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// step by step
function squareDigits(num) {
  return Number(
    // first make the num into a string.
    String(num)
      // and then split it into array.
      .split("")
      // after becomes array, use map and make it square.
      .map((number) => {
        return String(Number(number) ** 2);
      })
      // then combine it, make it as an integer.
      .join("")
  );
}

console.log(squareDigits(9119));
