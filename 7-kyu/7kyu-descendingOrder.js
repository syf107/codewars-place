// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  // first, make the number into string.
  //   second, split the string and change it into array.
  // as it is now array, use map to change it to number each.
  //   use sort array method and reverse its position.
  // join its array into the string again.
  // change it back into Number.
  const reversedArray = Number(
    String(n)
      .split('')
      .map((number) => Number(number))
      .sort((a, b) => b - a)
      .join('')
  );
  console.log(n, reversedArray);
  return reversedArray;
}

descendingOrder(42145);
descendingOrder(145263);
descendingOrder(123456789);
