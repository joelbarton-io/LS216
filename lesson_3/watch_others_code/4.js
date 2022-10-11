/* understanding the problem part 1
---------------------------------------------------------------
input: list of string numbers or ranges

output: list of integers

test cases:

requirements:
  - list elements increase from left to right
  - list elements (either a string number or a 'shorthand' range) can be separated by '-', ':', '..'
  - individual elements are always separated by ',' as per standard array conventions
---------------------------------------------------------------
*/
/* understanding the problem part 2
---------------------------------------------------------------

roadmap for P.O.D.:
  ARRAY of string numbers/ranges
  ...

in my own words...
  ..."transform an array of string numbers/string range elements into an array of digits"...


---------------------------------------------------------------
*/
/* steps
---------------------------------------------------------------

mental model:

abstract algo & method exploration:
DECLARE a result object array to store digits in
TRAVERSE input array of elements
  FOR EACH element check if it is a string range or string integer (CHECK IF IT CONTAINS SEPERATOR CHRS)
    IF ELEMENT is a string range [1, 2]
      compare the range's start value to the last value in RESULT || 0
        IF PRESENT
          COMPARE rangeStart to resultRecent
          IF resultRecent >= rangeStart;
            increment rangeStart by 10 until rangeStart > resultRecent

          IF resultRecent < rangeStart;
            PUSH rangeStart into RESULT;
            Increment resultRecent by 1 until the last digit in resultRecent === rangeEnd

    IF ELEMENT is a string integer
      compare the range's start value to the last value in RESULT || 0

      IF ELEMENT > resultRecent; PUSH ELEMENT into RESULT; go next
      IF ELEMENT === resultRecent increment by 1 and PUSH into RESULT
      IF ELEMENT < resultRecent, increment by 10 until element >= resultRecent
        IF element === resultRecent
          increment element by 1 and push into RESULT
        if element > resultRecent; push into RESULT


(revisit 'requirements' & as add more test cases as needed)
---------------------------------------------------------------
*/
/* testing
---------------------------------------------------------------

step through with 3 examples

implement with code
---------------------------------------------------------------
*/

function doozie(input) {
  const result = [];

  for (let i = 0; i < input.length; i++) {

    let currStr = input[i];
    let currNum = Number(currStr);
    let lastIndex = result.length - 1;
    let resultRecent = result[lastIndex] || 0;

    if (currStr.match(/[\.:-]/)) { // if RANGE

      let range = currStr.split(/[:-]/).map(Number);
      let rangeStart = range[0];
      let rangeEnd = range[1];

      while (rangeStart < resultRecent) {
        rangeStart += 10;
      }

      while (rangeStart === resultRecent) {
        rangeStart += 1;
      }

      do {
        result.push(rangeStart);
        rangeStart += 1;
      } while (result[result.length - 1] !== rangeEnd)

    } else { // if STRINGINT


      if (currNum > resultRecent) {
        result.push(currNum);
        continue;
      }

      if (currNum === resultRecent) {
        result.push(currNum + 1);
        continue;
      }

      if (currNum < resultRecent) {
        while (currNum < resultRecent) {
          currNum += 10;
        }
        result.push(currNum);
        continue;
      }
    }
  }

  return result;
}

console.log(doozie(['1', '3', '7', '2', '4', '1'])) // [1, 3, 7, 12, 14, 21]
console.log(doozie(["1-3", "1-2"])) // [1, 2, 3, 11, 12]
console.log(doozie(["104-2"])) // [104, 105, 106, 107, 108, 109, 110, 111, 112]
console.log(doozie(["1:5:2"])) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(doozie(['104-02']))