Given an array of strings and an original string, write a function to output an array of boolean values - true if the word can be formed from the original word by swapping two letters only once and false otherwise.

Examples
validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")
➞ [true, true, false, false]

// Swap "A" and "B" from "ABCDE" to get "BACDE".
// Swap "A" and "E" from "ABCDE" to get "EBCDA".
// Both "BCDEA" and "ACBED" cannot be formed from "ABCDE" using only a single swap.

validateSwaps(["32145", "12354", "15342", "12543"], "12345")
➞ [true, true, true, true]

validateSwaps(["9786", "9788", "97865", "7689"], "9768")
➞ [true, false, false, false]
Notes
Original string will consist of unique characters.

## INPUT:
  - array of strings
    - elems can be empty strings or any assortment of string chrs, just so long as they are strings &
  - original word (string)
    - will only consist of unique characters; no duplicate str characters in original word str
## OUTPUT:
  - array of booleans || error message
## DATA FLOW:

ARR of strings (need to be all of length n where n is the length of our second argument)
->
ARR of boolean values
## REQUIREMENTS:
  - in our operation, we can only 'SWAP' on pair of strings
  - case matters!
## EDGE CASES:
validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")) // [true, true, false, false]
validateSwaps(["32145", "12354", "15342", "12543"], "12345")) //[true, true, true, true]
validateSwaps([32145, "12354", "15342", "12543"], '12345')) // ERR: wrong data type el in first argument
validateSwaps(["BACDE"], "ABCDE")) // [true]
validateSwaps([], "ABCDE")) // []


validateSwaps(["", "", "", ""], "")) // return [true, true, true, true] || err
validateSwaps(["3", "12354", "15342", "12543"], "12345")) // ERR: invalid input
validateSwaps(["32145", "12354", "15342", "12543"], 12345)) // ERR: wrong data type for 2nd arg
validateSwaps(["bACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")) //  [false, true, false, false] CASE MATTERS!

## SUMMARY:
check to see if two strings can become identical by performing one operation on the left string

["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE"

"BACDE" : "ABCDE"
need to catalog non-equal str characters as we encounter them
['B', 'A', 'B', 'A'] -> make catalog unique and if length is === 2, then we can return true
counter : 2     As soon as counter is greater than 2, we can immediately return false

## STEPS:

GUARD against:
  - invalid inputs (datatype)
    0. second arg must be a STRING
    1. must be array of STRINGS
      - every el is string & every string element must be the same length as the second argument

result = [];
TRAVERSE input array of valid strings
  for each string:

    HELPER
    noMatchCounter = 0
    noMatchCatalog = [];
    traverse original string chrs with i (helper function)
      if noMatchCount > 2: return false

      for each chr:
        if chrLeft !== chrRight:
          increment noMatchCounter
          push both chrs into noMatchCatalog

    get amount of unique elements from noMatchCatalog:
      if length == 2 return true
      otherwise return false;

