/* You were tasked with making a list of every makeup item your local pharmacy had in stock. You created a very long array of each item, with each element having both a name and brand property. Now you're looking to simplify the list by combining duplicate items, and adding a count property to everything. */
/*

{
  '{"brand":"NARS","name":"Cosmetics Voyageur Pallete"}': 1,
  '{"brand":"Urban Decay","name":"Naked Honey Pallete"}': 1,
  '{"brand":"Stila","name":"Stay All Day Liquid Lipstick"}': 1,
  '{"brand":"Stila","name":"Brush"}': 2,
}


questions/clarifications:
- will the input always be a non-empty array of objects?  -> No, can be non empty or wrong type
- will the objects always have properties (brand & name)? -> No
- will the property values always be strings? (possibly undefined? or another type?) YES


input: array of objects
output: new array of objects with counts instead of duplicates


core path rules:
  - for a pair objects to be duplicates, they must have the same keys and values
  - if they are not the same keys and values, they are not duplicates and should have their own object entries

mental model:

  we want to transform a list of objects into a potentially smaller list of objects, each with a new count property

abstract algo :

GUARD against:
  - empty arrays
  - wrong data type elements in input array
  - el are objects, but they have either
    - the wrong # of properties
    - or simply the wrong properties

TRANSFORM input array into array of json objects
get size of json array

HELPER
TRAVERSE json array and produce an object that contains the keys and values of json el and the respective count (reduce)

take the key from the objCounts obj transform it back into an object
add the curr value as a property like count: value in the new object
dry run:

*/

function simplifyList(input) {
  if (input.length === 0) return 'Invalid';
  if (input.some(obj => typeof obj !== 'object')) return 'Invalid';
  if (input.some(obj => obj == null)) return 'Invalid';
  if (input.some(obj => Object.keys(obj).length !== 2)) return 'Invalid';

  const asJSON = input.map(JSON.stringify);
  const result = createJsonArray(asJSON);

  return result.map(entry => {
    const obj = JSON.parse(entry[0]);
    obj.count = entry[1];
    return obj;
  });
}

function createJsonArray(asJSON) {
  return Object.entries(asJSON.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
      return acc;
    } else {
      acc[curr] = 1;
      return acc;
    }

  }, {}));
}

console.log(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Brush" },
]));


/*  ➞ [
  { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
  { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 },
  { brand: "Stila", name: "Brush" , count: 1}
] */

/* console.log(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  1,
])) // detected a wrong type in array */

/* console.log(simplifyList([])) // when empty
console.log(simplifyList([1, 2, 3, {}])) // wrong type
console.log(simplifyList([{bread: "bad"}, {bread: 'good'}, {bread: 'good'}])) // wrong # of props + wrong keys

console.log(simplifyList([
  { brand: "NARS",}, // missing `name` prop
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Brush" }
])) // error because not all elements have the appropriate keys  */

// ~> 41:18
