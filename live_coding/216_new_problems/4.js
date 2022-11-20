/* GUARD for:
  - invalid main input (undefined, or non-array)
  - ensure input is 2d

FLATTEN valid input into 1d arr

TRAVERSE flattenedArr

BUILD a resultArr which only includes those elements which are not already present
  if element type is str:
    -> check it as a String exists in result array || if it exists as a Number
      - if either exist, continue iteration
      - otherwise, add to resultArr

  if element type is Number:
    -> check it exists as Number in result array || if it exists as a String
      - if either exist, continue iteration
      - otherwise, add to resultArr

  if element type is boolean:
    -> check if it exists as a Boolean result array || if it exists as a String
      - if either exist, continue iteration
      - otherwise, add to resultArr

  if element type is arr/obj:
    -> check if element stringified exists in resultArr:
      - if it exists: continue iteration
      - otherwise, add to resultArr

return resultArr */

function flattenAndUnique(twoDimArr) {
  if (!Array.isArray(twoDimArr)) return 'invalid input, not array';
  if (twoDimArr.some(subArr => !Array.isArray(subArr))) return 'invalid element in array, non array!';

  const oneDimArr = twoDimArr.flat();
  const result = [];

  for (let i = 0; i < oneDimArr.length; i++) {
    const candidate = oneDimArr[i];

    if (typeof candidate === 'string') {
      if (onlyContainsNumChrs(candidate)){

      }
    } else if (typeof candidate === 'number') {
      if (!result.includes(candidate) && !result.includes(String(candidate))) {
        result.push(candidate);
      }

    } else if (Array.isArray(candidate) || typeof candidate === 'object') {
      let stringified = JSON.stringify(candidate);
      if (!result.includes(stringified)) {
        result.push(stringified);
      }
    } else if (typeof candidate === 'boolean') {
      if (!result.includes(candidate) && !result.includes(String(candidate))) {
        result.push(candidate);
      }
    }
  }

  return result;
}

function onlyContainsNumChrs(str) {
  return str.match(/[\d]]/g) && !str.match(/[\D]/g);
}

const sparse = [];
sparse.length = 3;

// console.log(flattenAndUnique(1));
// console.log(flattenAndUnique([1, 2, 3]))
// console.log(flattenAndUnique([['true', false, true]])); // ['true', false]
console.log(flattenAndUnique([['true', false, NaN], ['NaN']])); // ['true', false, NaN]
console.log(flattenAndUnique([['true', false, '1abcd', 1]])); // ['true', false, '1abcd', 1]
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']])); // [1, 2, 3, 4, 5, 'a']
console.log(flattenAndUnique([[1, 2, 3, undefined, Infinity], ['3', 4, 5, 'a', {}]])); // [1, 2, 3, undefined, Infinity, 4, 5, 'a', '{}']
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a'], sparse])); // [1, 2, 3, 4, 5, 'a']
// console.log(flattenAndUnique([[]])); []
// console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a', []]])); // [1, 2, 3, 4, 5, 'a', '[]']
// console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a', [1, 2, 3]]])); // [1, 2, 3, 4, 5, 'a', '[1, 2, 3]']
// console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a', [1, 2, 3], [1, 2, 3]]])); // [1, 2, 3, 4, 5, 'a', '[1, 2, 3]']
// console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a', [], []]])); // [1, 2, 3, 4, 5, 'a', []]
// console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a', [], sparse]])); // [1, 2, 3, 4, 5, 'a', '[null,null,null]']
// console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a', {}, {}]])); // [1, 2, 3, 4, 5, 'a', '{}']


{
  '3': [3],
}