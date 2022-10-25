/*
Create a function that takes an object and returns an object of all entries having unique marks. If the marks are the same, take who is eldest.

*/

/*
'unique marks' : obj.marks must be unique in result object

questions/clarifications:

1. will the input ever be an empty object? YES
2. will valid input objects always have the appropriate keys and values?
  (make harder) -> valid obj properties not guaranteed!           taking this path *->
  (simple) -> valid obj properties guaranteed.

3. In the event of two objects having equal 'marks' and equal 'age', how should we handle this case?
4. will the object age property always be a valid integer? (NaN, wrong datatype, or -Infinity, etc...)
5. will the object 'marks' property always be a valid string int? (NaN, wrong datatype, or -Infinity, etc...)



input: object
output: new object


core path rules:
- input can be an empty object or invalid type
- valid obj properties not guaranteed
  - this applies to property values and keys as well for marks and age

- if two object.marks are 'equal'
  - prefer the elder (object.age)

  - if same age and equal marks:
    - take first found


mental model:


Transforming input object of key : values (object)
into ->
new object with unique marks only


abstract algo :

GUARD against:
  - invalid main input type (must be object; cannot be null)

  - all property values must be objects
  - all property value objects must have the correct property names



valid input:

CREATE object keys array to use to iterate over the input object properties

DECLARE an empty result object

TRAVERSE input object with keys

  IF result object contains




{}

"0": { age: 18, name: "john", marks: "400" },

*/

function getObject(input) {
  if (typeof input !== 'object' || input == null) return 'invalid input';
  if (!Object.values(input).every(val => typeof val === 'object' && val != null)) return 'invalid elements';
  if (Object.values(input).some(val => {
    return isNaN(Number(val.marks)) || Number(val.marks) === Infinity || Number(val.marks) === -Infinity;
  })) return 'Invalid marks value (NaN or +/- Infinity detected)';

  const KEYS = Object.keys(input);
  const storage = [];
  const sorted = Object.values(input).sort((a, b) => b.marks - a.marks);

}

// Examples
console.log(getObject({
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" }
}))

/* ➞ {
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 16, name: "Robin", marks: "200" },
  "2": { age: 16, name: "Bella", marks: "300" }
}
*/

console.log(getObject({
  "0": { age: 17, name: "john", marks: "400" }, // same marks and age so take first encountered
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" }
}))

/* ➞ {
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 16, name: "Robin", marks: "200" },
  "2": { age: 16, name: "Bella", marks: "300" }
}
*/

console.log(getObject({
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 17, name: 'julie', marks: '400'},
  2: {age: 16, name: 'Robin', marks: '200'},
  3: {age: 16, name: 'Bella', marks: '300'},
  4: {age: 16, name: 'john', marks: '250'},
  5: {age: 15, name: 'julie', marks: '250'}
}))
/* ➞    {
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 16, name: 'Robin', marks: '200'},
  2: {age: 16, name: 'Bella', marks: '300'},
  3: {age: 16, name: 'john', marks: '250'}
 */

console.log(getObject({
  "0": { age: '18', name: "john", marks: "400" },
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" },
}))
/* ➞ {
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 16, name: "Robin", marks: "200" },
  "2": { age: 16, name: "Bella", marks: "300" }
}
*/

/* console.log(getObject({
  "0": { age: 18, name: "john", marks: "Infinity" }, < Infinity string is invalid!
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" },
})) // error
 */


/* console.log(getObject({
  "0": { age: 18, name: "john", marks: "NaN" },
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" },
})) // Error bc invalid value marks: NaN

 */
/* console.log(getObject({})) // error
console.log(getObject()) // error
console.log(getObject('fake object')) // error
console.log(getObject(12)) // error

console.log(getObject({
  0: 'zero',
  1: undefined,
  2: null,
  3: [],
})) // error





*/