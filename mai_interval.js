// Convert a list of number to their interval list
/*
Input:
  ONe arg -> array of numbers (+/- integers (includes 0))


Output:
  single []
    string range representations or solitary nums

SUMMARY:

array of +/- ints   ->   array of range or solitary number representations


ALGO:

MAIN:

  - process input (remove duplicate elements from input array)
  - sorting unique elements array in ascending order

  - iterate over sorted, unique array elements

  - with two pointers (left, right)
    - check to see if the left + 1 === right
      - true?
        ->
      - false?
        -> check if there was a range in play and if so, catalog range
          otherwise, add that left element to result array

  - guard here for leftover range


makeUnique:
  -> given the input, remove all duplicate elements and return

sortAscending:
  -> given unique array, sort in ascending order (- to +) and return

*/
function makeUnique(inputArr) {
  return Array.from(new Set(inputArr));
}

function sortAscending(uniques) {
  return uniques.sort((a, b) => a - b);
}

function makeRanges(processed) {
  const result = []
  const end = processed.length;

  for (i = 0; i < end; i++) {
    let left = processed[i];
    while (processed[i + 1] - processed[i] === 1) i++;
    let right = processed[i];
    (left === right) ? result.push(String(left)) : result.push(`${left}-${right}`);
  }
  return result;
}

function numbersToRanges(input) {
  if (!input.length) return [];
  if (input.length === 1) return [String(input[0])];
  const processed = sortAscending(makeUnique(input));
  return makeRanges(processed);
}

// main
console.log(numbersToRanges([3, 4, 5, 10, 11, 12])) // ["3-5", "10-12"]

// duplicate elements in input
console.log(numbersToRanges([5, 5, 4, 3, 10, 11, 12])); // ["3-5", "10-12"]

// solitary number in input
console.log(numbersToRanges([5, 4, 3, 10, 11, 12, 100, 101, 102, 103])); // ["3-5", "10-12", "100"]

// negative range
console.log(numbersToRanges([-10, -9, -8, -7, -6, -5])); // ["-10--5"]

// includes zero in range
console.log(numbersToRanges([-1, 0, 0, 1, 100])); // ["-1-1", "100"]

// length 1
console.log(numbersToRanges([5])); // ["5"]

// empty
console.log(numbersToRanges([])); // []


// let tempStart; // 3

// [3, 4, 5, 10, 11, 12, 100]
//                    ^. ^
// let left;
// let right;

// for (let i = 1; i < processed.length + 1; i++) { // why did i miss this??
//   left = processed[i - 1];
//   right = processed[i];

//   if ((left + 1) === right && tempStart === undefined) { // start of interval
//     tempStart = left;
//   } else {
//     if (tempStart) {
//       let str = String(tempStart) + "-" + String(left);
//       result.push(str);
//       tempStart = undefined;
//     } else {
//       result.push(String(left));
//     }
//   }
// }
