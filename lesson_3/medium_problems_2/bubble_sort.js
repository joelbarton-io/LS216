// Bubblesort
/* || understanding the problem part 1 ||
---------------------------------------------------------------
input: an array
  - always will have at least two elements

output: a sorted array
  - the mutated input array, sorted from smallest to largest
test cases:

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

requirements:
  - make multiple passes through the array

---------------------------------------------------------------
*/
/* || understanding the problem part 2 ||
---------------------------------------------------------------

roadmap for P.O.D.:
  ARRAY of 2...n elements
in my own words...
  ..."iterate through the array comparing curr and next [comparison].  repeat iteration until no swaps are made and the list is sorted in ascending order"...


---------------------------------------------------------------
*/
/* || steps ||
---------------------------------------------------------------

mental model:
- nested loops, outer loop involves toggle (while (condition))
  - inner loop is iterating over the array object

abstract algo & method exploration:


DECLARE some toggle value and initialize it to false

WHILE (!sorted)
  ITERATE from first index upto length - 2 (if 5 el, stop at index 3)
    CHECK if arr[currIdx] > arr[nextIdx]
      YES? - SWAP THEM (thus mutating the array)
        CONTINUE
      NO?
        IF currIdx == second to last
          REASSIGN toggle value to TRUE
        ELSE
          CONTINUE to next iteration



(revisit 'requirements' & as add more test cases as needed)
---------------------------------------------------------------
*/
/* || testing ||
---------------------------------------------------------------

step through with 3 examples

implement with code
---------------------------------------------------------------
*/

function bubbleSort(arr) {
  let madeSwap = true;

  while (madeSwap) {
    madeSwap = false;
    for (let idx = 0; idx < arr.length - 1; idx += 1) {
      let curr = arr[idx];
      let next = arr[idx + 1];

      if (curr > next) { // SWAP
        arr[idx] = next;
        arr[idx + 1] = curr;
        madeSwap = true;
      }
    }
  }
  return arr;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
