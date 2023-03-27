// Given an array of strings, return the elements that can be form by the longest string.
console.log(canForm(["may", "master", "reams", "same"])); // -> ['reams', 'same'] ORDER MATTERS

console.log(canForm(["reams", "master", "reams", "reams"])); // -> ['reams', 'same', "reams", "reams"]
console.log(canForm(['1.0000', 1.000, 1, '1'])); // -> ['1' ...]

// no matches returns empty array
console.log(canForm(["may", "zzzzz", "reams", "same"])); // -> [same]
console.log(canForm(["master"])); // -> [];
console.log(canForm([])); // -> [];

// variable input types
console.log(canForm([NaN, 13, 1.00, {}, [], Infinity, "master", "reams", "same"])); // [... '13', '1.00',  ..]

console.log(canForm([10012.3, 2.1, 1.5, 12, 23, "10.01"])); // didn't ask about order or data type
// [ '10.01', 12, 2.1, 23 ] returns original elements





// 10:02 -> 10:40

/*
input:
  - array of elements (non sparse)
  - only includes indexed elements

  elements can be non strings
    - for numbers (ints, floats) not concerned with infinity or NaN

  undefined
  [], {},


things that I know:

there will always be only one longest string in the input array
we are NOT concerned with the letter tallies (of the longest string's chrs)
need to filter/ignore ([], {}, some special numbers)
trailing zeros or unimportant to conversion of flaot into string

algo:


guarding for empty array []


filter input's elements to only include integers, floats, and strings (filter)


convert all non-string elements in input to strings (map)


find the longest string (sort by length (descending)) select first el (this will be longest el)

create an object that contains the longest word's chrs as keys
chrs = {
  m -> true,
  a -> true,
  ...
}

loop over sorted array of words from index 1

select those words which satisfy requirement


helper: loop over chrs and return true if all chrs are present in obj `chrs`

return resulting array

*/
function makeDict(longest) {
  return longest.split('').reduce((acc, curr) => {
    if (!(curr in acc)) acc[curr] = true;
    return acc;
  }, {});
}

function isPresent(candidate, chrs) {
  return candidate.split('').every(letter => {
    return chrs[letter];
  });
}


function canForm(input) {
  if (input.length === 0) return [];

  const cleaned = input.filter(el => {
    if (typeof el === 'string') return el;

    if (typeof el === 'number' && !Number.isNaN(el) && el !== Infinity && el !== -Infinity) return el;
  }).map(String);

  const sorted = cleaned.sort((a, b) => a.length - b.length);
  const longest = sorted.pop();
  const CHRS = makeDict(longest);

  let stringResult = sorted.filter(word => {
    return isPresent(word, CHRS);
  }).sort((a, b) => a < b ? -1 : 1);

  return stringResult;
}

/*
didn't aske about order or output el type
*/