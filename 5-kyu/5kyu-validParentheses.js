// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens) {
  let status = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') status++;
    if (parens[i] === ')') status--;
    if (status < 0) return false;
  }

  return status === 0;
}

console.log(validParentheses('()')); //=>  true
console.log(validParentheses(')(()))')); //=>  false
console.log(validParentheses('(')); //=>  false
console.log(validParentheses('(())((()())())')); //=>  true
