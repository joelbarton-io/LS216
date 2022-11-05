/*

?:


input: array of numbers 1-4 and a letter `H`
output: boolean



rules of the problem (validate with test-cases):
- 1 can move to 2
- 4 can move to 3

- 2 can move to 1 & `H`
- 3 can move to `H` and 4

- `H` can move to 2 & 3


identify sub-problems:

REPRESENT rules as a hash object



steps:

GUARD against:
  - invalid data types
  - empty arrays

BUILD rules object based on rules

TRAVERSE path array with sliding window; for each window:
  check that movement from idx 1 to index 2 is allowed (based on rules hash)
    USE EXPLICIT TYPE COERCION

    if VALID, continue
    if INVALID, break and return false

return true;


rules = {
  '1': ['2'] -> 1 can move to 2
  '4': ['3'] -> 4 can move to 3
  '2': ['1' 'H'] -> 2 can move to 1 & `H`

  - 3 can move to `H` and 4
  - `H` can move to 2 & 3
}
*/
function possiblePath(path) {
  if (path.length < 2) return true;
  let result = true;

  for (let i = 1; i < path.length; i++) {
    const window = path.slice(i - 1, i + 1);
    if (!isValidMovement(window)) {
      result = false;
      break;
    }
  }

  return result;
}

function isValidMovement(subArr) {
	const [from, to] = subArr;
  const rules = {
    1: ['2'],
    3: ['4'],
    4: ['3', 'H'],
    2: ['1', 'H'],
    'H': ['2', '4'],
  }

  return rules[String(from)].includes(String(to));
}

console.log(possiblePath([1, 2, "H", 4, 3])) // false
console.log(possiblePath([2, "H", 3])) // false
console.log(possiblePath([1, 2, 3, 4])) // false
console.log(possiblePath([1, 2, 1, "H", 3, 4])) // false
console.log(possiblePath([1, 2, 1, 2,  "H", 3, 4])) // false
console.log(possiblePath(["H", 3, 4, 2, 1])) // false
console.log(possiblePath([1, 2])) // true
console.log(possiblePath([1])) // true
console.log(possiblePath([])) // true


// ~> 25:22 very easy problem