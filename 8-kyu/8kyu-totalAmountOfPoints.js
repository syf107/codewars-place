// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  // your code here
  // contain the result of the point.
  let result = 0;
  // iterate the to each array elements.
  games.forEach((score) => {
    // split it with : and get the value x and y in the form of Number.
    let [x, y] = score.split(":");

    // compare x and y with three conditions,
    // if x is bigger than y got result add 3
    if (x > y) {
      result += 3;
      // if x is smaller than y got 0 points.
    } else if (x < y) {
      result += 0;
      // if draw add 0 to the result.
    } else {
      result += 1;
    }
  });

  return result;
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
