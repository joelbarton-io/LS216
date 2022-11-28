/* FORGOT TO ASK ABOUT THE VALUES IN THE OBJECTS; can technically be undefined or any other non-int datatype*/
/*
Q:
0: will the input always be an array? YES
1. will the array always contain elements? NO
2. will the elements always be objects? NO
3. will the objects always have necessary properties (name and quanity)? NO

input: array of elements (must be an object)
output: array of objects

RULES:
  - input is always an array
  - input can be an empty array
  - input elements can be all diff types
  - object elements won't always have the correct properties -> return null for these objects?

mental model:
  - traversing the array of valid objects
  - upon each object, perform a creation of an new array filled with the correct amount of copies of the obj
  - once we have all the objects stored in the array, push spread array into a result array

  - filter out null values (from object elements which didn't have the appropriate properties)
  - return array of objects

algo :

GUARD against:
  - empty arrays
  - non-object elements
  - null elements

TRAVERSE input array of objects (map)
  if object doesn't have the necessary properties
    return null
  otherwise, check quantity property for value

  declare temp array
  from 0 upto not including quantity
    push {...} into temp array
  end

  return tempArr flattened

filter mapped array of arrays for null values

dry run:

*/

function splitBunches(input) {
  if (typeof input === 'undefined' || input.length === 0 || input.some(el => el === null)) {
    return 'invalid input';
  }

  const arrayOfArrays = input.map(obj => {
    if (obj.name && obj.quantity) {
      const tempArr = [];
      const count = obj.quantity;

      for (let i = 0; i < count; i++) {
        tempArr.push({name: obj.name, quantity: 1});
      }
      return tempArr;
    }
    return {};
  });

  return arrayOfArrays.flat();
}

console.log(splitBunches([])); // -> []
console.log(splitBunches([{}, new Set(), null, 1])); // ERROR
console.log(splitBunches([{}, {}, {}])); // ERROR, no properties
console.log(splitBunches([{}, {}, {}])); // ERROR, no properties
console.log(splitBunches([
  { name: "currants" }, // null
  { quantity: 2 }, // null
  { name: "bananas", quantity: 2 },
]));

// > [null, null, { name: "bananas", quantity: 1 }, { name: "bananas", quantity: 1 }]

console.log(splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 },
  {},
]));

// ➞ [
//   { name: "currants", quantity: 1},
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]
