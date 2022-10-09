// const allTypes = [1, [], -Infinity, '', 'hi', 0.0321, true, undefined, null, NaN, new Map()];
// const withProp = [1, 'hi'];
// const nestedWithProp = [1, 'hi', withProp]
// withProp['key'] = 'value';
// nestedWithProp['key1'] = 'value1';
// console.log(doubler([2, 3])) // numbers
// console.log(doubler(['hi', 'hello'])) // strings
// console.log(doubler([[], {}, false, undefined, null, Symbol('symbol')])) // duplicate all other types: arrays, objects, booleans, undefined, null, bigInts, symbols
// console.log(doubler([])) // must produce a new array object (non-mutating)
// console.log(doubler([Infinity, NaN])) // SPECIAL NUMBER VALUE? -> -Infinity, Infinity, NaN,
// console.log(doubler([0.123, 1])) // Other numbers; fractional numbers
// console.log(doubler(['', ' ', 3])) // empty strings are doubled but that doesn't do anythign so it's w/e
// console.log(doubler(['hi', 'hello', 'how are you'])) // normal strings
// console.log(doubler([])) // --------- non-primitive elements should have their reference duplicated, not their value
// console.log(doubler([1, '@'])) // duplicates are treated as their type; no special treatment
// console.log(doubler([])) // ---- nested complex data types ... duplicate recursively?
// console.log(doubler([0, , , , 1])) // sparse arrays are flattened (flat(0) to preserve sparsely nested subarray)
// console.log(doubler(withProp)) // Don't modify the object property, just leave as is > [2, 'key': 'value']
// console.log(doubler(nestedWithProp)) // same as ^, don't modify an array's object properties
// console.log(doubler([])) // if array arg is empty, return new empty array
// console.log(doubler([], [], [])) // ignore second and third args
// console.log(doubler('a string to be treated as an array')) // VALID if input is a string, split it into an array of elements
// console.log(doubler([])) // VALID if input is NON-negative int, treat it as a list of digits (int -> str -> arr of ints)
// console.log(doubler({'a': 1, 'b': 2})) // VALID if input is an object, treat it as an array of its property values
// console.log(doubler([])) //


// HOW DO WE PRESERVER ARRAY'S OBJECT PROP ???
// const input = [1, 2, 3];
// input.hi = 'hi';
// const newArr = [...input] // spread, slice, and copyFrom() all fail
// console.log(input === newArr);
// console.log(newArr);
// newArr.length = 0;
// console.log(input);
// console.log(newArr);

// ------------------------------------
// version numbers problem test cases practice

//      valid
// 1 is equal to 1
// 1.1 is greater than 1.0
// 2.3.4 is less than 2.3.5

// compareVersions('1', '1'); // === - same length, same value
// compareVersions('1.1', '1.0') // > - same length, diff value
// compareVersions('2.3.4', '2.3.5') // < - same length, diff value

//      invalid
// 1.a is not a valid version          // we only want to deal with numbers and dots
// .1 and 1. are not valid versions    // versions must begin and end with a number
// 1..0 is not a valid version         // dots can only appear between two numbers
// 1.0 and 1.0.0 are equal to 1        // zeros can be inferred but are not always shown
// 1.0.0 is less than 1.1              // can handle version numbers with different lengths
// 1.0 is less than 1.0.5              // can handle version numbers with different lengths

// compareVersions('1.a', '1.1') // INVALID
// compareVersions('.1', '1.1') // INVALID - leading dot
// compareVersions('1.', '1.1') // INVALID - trailing dot
// compareVersions('1..0', '1.1') // INVALID - consecutive dots
// compareVersions('1.0.0', '1') // === - different lengths, same value
// compareVersions('1.0.0', '1.0') // === - diff lengths, same value
// compareVersions('1.0.0', '1.1') // < - diff lengths, diff value
// compareVersions('1.0', '1.0.5') // < - diff lengths, diff value

// function compareVersions(one, two) {
//   if (one.match(/[^0-9\.]/) || two.match(/[^0-9\.]/)) {
//     return null;
//   }
//   if (one[0] === '.' || one[one.length - 1] === '.' || two[0] === '.' || two[two.length - 1] === '.') {
//     return null;
//   }
//   for (let index = 0; index < one.length; index += 1) {
//     if (one[index] === '.' && one[index + 1] === '.') {
//       return null;
//     }
//   }

//   for (let jindex = 0; jindex < two.length; jindex += 1) {
//     if (two[jindex] === '.' && two[jindex + 1] === '.') {
//       return null;
//     }
//   }

//   const arrOne = one.split('.');
//   const arrTwo = two.split('.');

//   if (arrOne.length < arrTwo.length) {
//     let diff = arrTwo.length - arrOne.length;
//     let arr = [];
//     arr.length = diff;
//     arr.fill(0)
//     arrOne.push(...a);
//   } else if (arrOne.length > arrTwo.length) {
//     let diff = arrOne.length - arrTwo.length;
//   }
// }

function compareVersions(versionA, versionB) {
  let validChars = /^[0-9]+(\.[0-9]+)*$/;

  if (!validChars.test(versionA) || !validChars.test(versionB)) {
    return null;
  }

  let aParts = versionA.split('.').map(Number);
  let bParts = versionB.split('.').map(Number);

  for (let i = 0; i < aParts.length; i += 1) {
    let aValue = aParts[i] || 0;
    let bValue = bParts[i] || 0;

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
  }

  return 0;
}

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1