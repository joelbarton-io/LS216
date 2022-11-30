/* Create a function which converts an ordered number array into a array of ranges
(represented as strings). Note how some arrays have some numbers missing.

If there are no numbers consecutive to a number in the array, represent it as
only the string version of that number
Return an empty array if the given array is empty. */


/*
## REQUIREMENTS:
  - if no consecutive ascending elements present, represent the input array elements as string numbers
  - the output array's length will always be less than or equal to the input array's length
## EXAMPLES/EDGE CASES:
  - empty array ('empty' leng is zero)
## INPUT:
  - sorted array of integers || empty array
  - valid array of length 0 or more containing 0 or more positive integer starting at 1
  - ascending order!

## INTERMEDIATE:

[1, 2, 3, 4, 5, 7, 8, 10]
[[1, 2, 3, 4, 5], [7, 8], [10]] -> ['1-5', '7-8', '10']



[1]
[1, 2, 3, 4, 5, 7, 8, 10]
currEl : 2


## OUTPUT:
  - array containing 0 or more string elements (single string number '8' or ranges '4-6')
  - empty array
## SUMMARY:
  - transforming an input array of integers into an array of string number elements (single string number '8' or ranges '4-6')

## STEPS:

GUARD for:
  - input array of length 0 or 1
    - []
    - input.map(String)

  DECLARE rangesArr : [];
  DECLARE tempRange : [1]


  TRAVERSE input array of elements using normal forloop with two pointers (1 ... upto not including length)
    DECLARE currEl

      if currEl isGreaterThan tempRange last:
        ADD currEl to TempRange

      if CurrEl is NOT greater than tempRange last:
        push TempRange into rangesArr
        reassign tempRange to single element array containing curEl




  traverse rangesArr
    map the elements into the appropriate ranges or string numbers
*/

function numbersToRanges(input) {

  if (input.length === 0) return input;
  if (input.length === 1) return input.map(String);

  let rangesArr = [];
  let tempRange = input.slice(0, 1);

  for (let i = 1; i < input.length + 1; i++) { //

    const currEl = input[i];
    const lastEl = tempRange[tempRange.length - 1];

    if (currEl - 1 === lastEl) {
      tempRange.push(currEl);
    } else {
      rangesArr.push(tempRange);
      tempRange = [currEl];
    }

    // if (i === input.length - 1) {
    //   rangesArr.push(tempRange);
    // }
  }

  return rangesArr.map(subArr => {
    if (subArr.length === 1) {
      return String(subArr[0]);
    } else {
      return String(subArr[0]) + '-' + String(subArr[subArr.length - 1])
    }
  });
}


console.log(numbersToRanges([1, 2, 3, 4, 5, 7, 8, 16])) // ['1-5', '7-8', '16']
console.log(numbersToRanges([1, 4, 5, 7, 8])) // ['1', 4-5', '7-8']
console.log(numbersToRanges([1, 3, 5, 7, 9])) // ['1', '3'. ...]
console.log(numbersToRanges([])) // []
console.log(numbersToRanges([3])) // ['3']
console.log(numbersToRanges([1, 2, 3, 4, 5])) //➞ ["1-5"]
console.log(numbersToRanges([3, 4, 5, 10, 11, 12])) //➞ ["3-5", "10-12"]
console.log(numbersToRanges([1, 2, 3, 4, 99, 100])) //➞ ["1-4", "99-100"]
console.log(numbersToRanges([1, 3, 4, 5, 6, 7, 8])) //➞ ["1", "3-8"]