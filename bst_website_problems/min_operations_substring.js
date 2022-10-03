/*
calculate range of start indices; we're limited to indices upto the value of (s length - t length);


initialize array
iterate from 0 to previously calculated value
  intialize a counter to 0
    compare letter at each index in each string
      if they're not the same letter
        increment counter
      else continue

  push counter into array

next iteration

return max value from array
*/

let s = "foobar";
let t = "oops";

function solve(s, t) {
  let result = Infinity;
  const range = s.length - t.length;

  for (let i = 0; i <= range; i += 1) {
    let count = 0;
    for (let j = 0; j < t.length; j += 1) {
      if (s[i + j] === t[j]) {
        continue;
      } else {
        count += 1;
      }
    }
    if (count < result) {
      result = count;
    }
  }
  return result;
}

console.log(solve(s, t));
