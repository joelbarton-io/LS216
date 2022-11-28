// console.log(validateSwaps({}, "ABCDE")) // ERR
// console.log(validateSwaps(["32145", "12354", "15342", "12543"], 12345)) // ERR: wrong data type for 2nd arg
// console.log(validateSwaps([32145, "12354", "15342", "12543"], '12345')) // ERR: wrong data type el in first argument
// console.log(validateSwaps(["3", "12354", "15342", "12543"], "12345")) // ERR: invalid input
// console.log(validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")) // [true, true, false, false]
// console.log(validateSwaps(["32145", "12354", "15342", "12543"], "12345")) //[true, true, true, true]
// console.log(validateSwaps(["BACDE"], "ABCDE")) // [true]
// console.log(validateSwaps(["bACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")) //  [false, true, false, false] CASE MATTERS!
// console.log(validateSwaps(["", "", "", ""], "")) // return [true, true, true, true] || err
// console.log(validateSwaps([], "ABCDE")) // []

// console.log(validateSwaps(['BACDE', 'EBCDA', 'BCDEA', 'ACBED'], 'ABCDE'), [true, true, false, false])
// console.log(validateSwaps(['32145', '12354', '15342', '12543'], '12345'), [true, true, true, true])
// console.log(validateSwaps(['9786', '9788', '97865', '7689'], '9768'), [true, false, false, false])
// console.log(validateSwaps(['123', '321', '132', '13', '12'], '213'),  [true, false, false, false, false])
// console.log(validateSwaps(['123', '1234', '1235'], '12'), [false, false, false])
// console.log(validateSwaps(['123', '123', '123'], '133'), [false, false, false])
// console.log(validateSwaps(['132', '321', '213'], '123'), [true, true, true])

console.log(validateSwaps(["BBBBB", "EBCDA", "CCCCC", "ACBED"], "ABCDE")) // [false, true, false, false]

function validateSwaps(arr, str) {
  if (!Array.isArray(arr)) return 'invalid arg 1';
  if (typeof str !== 'string') return 'invalid arg 2';
  if (arr.some(candidate => typeof candidate !== 'string' || candidate.length !== str.length)) return 'invalid arr elems';

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const candidate = arr[i];
    const candResult = canSwap(candidate, str);
    result.push(candResult);
  }

  return result;
}

function canSwap(candi, original) {
  let noMatchCounter = 0
  let noMatchCatalog = [];

  for (let i = 0; i < candi.length; i++) {
    const candiChr = candi[i];
    const origiChr = original[i];
    if (noMatchCounter > 2) return false;
    if (candiChr !== origiChr) {
      noMatchCounter++;
      noMatchCatalog.push(candiChr);
      noMatchCatalog.push(origiChr);
    }
  }

  const uniqueChrs = Object.entries(noMatchCatalog.reduce((acc, curr) => {
    if (!acc[curr]) acc[curr] = true;
    return acc;
  }, {})).length;

  if (uniqueChrs > 2) {
    return false;
  } else {
    return true;
  }
}

/*
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

*/