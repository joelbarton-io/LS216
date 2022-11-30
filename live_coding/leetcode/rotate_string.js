/*
## REQUIREMENTS:
  - the strings must be of equal length
  - (multiple times up to the length of the string `s`)
## EXAMPLES/EDGE CASES:
  - s = ' ', goal = ' '

## INPUT: two strings `s` and `goal`
  - never an empty string
## INTERMEDIATE:
## OUTPUT: boolean

## SUMMARY:
  - check to see if it's possible to transform string `s` into string `goal` by shifting the left most character to the end of the string (multiple times up to the length of the string `s`)
## STEPS:

check if the strings have the same length

DECLARE `cycles` : length of string `s`
DECLARE `res` : false

while (cycles > 0):

  compare `s` and `goal`
    - if they are the same, reassign `res` to true, break out while loop
  otherwise:
    first chr in a variable
    reassign `s` to `s` from index 1 up to the end of `s` + `firstChr`

  decrement cycles by 1

return `res`;
*/
// goal = "cdeab"

// s = "cdeab"

var rotateString = function(s, goal) {

  if (s.length !== goal.length) return false;

  let cycles = s.length;
  let res = false;
  let first;

  while (cycles > 0) {
    if (s === goal) {
      res = true;
      break;
    }
    first = s[0];
    s = s.slice(1) + first;
    cycles--;
  }

  return res;
};