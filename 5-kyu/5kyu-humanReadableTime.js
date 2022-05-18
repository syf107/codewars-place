// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  const readableTime = {
    second: 0,
    minute: 0,
    hour: 0,
  };
  readableTime['hour'] = Math.floor(seconds / 3600);
  readableTime['minute'] = Math.floor(
    (seconds - readableTime.hour * 3600) / 60
  );
  readableTime['second'] =
    seconds - readableTime.hour * 3600 - readableTime.minute * 60;

  function digit(number) {
    if (number < 10) return '0' + number;
    return number;
  }
  return `${digit(readableTime.hour)}:${digit(readableTime.minute)}:${digit(
    readableTime.second
  )}`;
}

console.log(humanReadable(50));
console.log(humanReadable(120));
console.log(humanReadable(3600));
