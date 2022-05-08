// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
  // adding the opening parenthesis for the first.
  numbers.unshift('(');
  //   use splice to insert the closing parenthesis and also space.
  numbers.splice(4, 0, ')', ' ');
  //   use splice to add stripe.
  numbers.splice(-4, 0, '-');
  //    join the array to be a new string of telephone number.
  return numbers.join('');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
