/*

?:Given an array, create a function that returns an object detailing how
many times each element was repeated. Sort the object by value in descending order.

1) will the array always have items in it or can it be empty?
2) can the array be sparse (empty slots)?
3) if an element is an empty object, how should it be represented? stringified? or '[Object object]'


input: array of any elements
output: dictionary of elements



rules of the problem (validate with test-cases):
- items in array can be   ANY TYPE


identify sub-problems:

reduce items into a single object with properties: values (count)

steps:

GUARD against invalid input types and scenarios (non-array, empty array, sparse array)

REDUCE valid array of elements

return result object
*/

function countRepetitions(arr) {
  if (!Array.isArray(arr)) return null;
  if (arr.length === 0) return null;
  // didn't deal with sparse arrays

  const tally = makeTally(arr)
  return sortByVal(tally);
}

function makeTally(arr) {
  return arr.reduce((a, c) => {
    let key = String(c);
    a[key] ? a[key]++ : a[key] = 1;
    return a;
  }, {});
}

function sortByVal(tally) {
  return Object.fromEntries(Object.entries(tally).sort((a, b) => b[1] - a[1]));
}

console.log(countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"])) //➞ { cow: 3, cat: 2, dog: 1 }
console.log(countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0])) //➞ { 0: 6, 5: 3, 12: 2, 1: 1 }
console.log(countRepetitions(["Infinity", "null", "Infinity", "null", "null"])) //➞ { null: 3, Infinity: 2}
