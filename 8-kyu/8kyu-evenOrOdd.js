/*
Instruction

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/
// Solution

// if the number modulus 2 equals zero, it is even.
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}