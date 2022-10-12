/*
In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:

Have the same color or different colors.
Have the same number or different numbers.
Have the same shades or different shades.
Have the same shape or different shapes.
The four properties are:

Colors: red, purple, green
Numbers: 1, 2, 3
Shades: empty, lined, full
Shapes: squiggle, oval, diamond

Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.
*/


/* questioning (interrogate the problem & interviewer; establish the rules)
---------------------------------------------------------------

terms: "set"
input: array of card objects with 4 properties (three permutations per property)
output: boolean
center case:

RULES:
  - all the same properties (4 types) across the three cards must either be the same or be different

---------------------------------------------------------------
*/
/* outlining (validate assumptions)
---------------------------------------------------------------

rephrase: ..."return boolean depending of in the supplies array of cards represents a 'set'"...

roadmap:
  ARRAY of card OBJECTS -> { color: "green", number: 1, shade: "empty", shape: "squiggle" }

  check a set object of each property
    color
    number
    shade
    shape

  BOOLEAN

exploration:

---------------------------------------------------------------
*/
/* steps (establishing MM & flow of data from input to output)
---------------------------------------------------------------

mental model:
- using an array of Set object property stores
- determine if any of the objects in the array have a size of 2; if they do then false
- otherwise true

abstract algo :

DECLARE an SETS array to hold four empty set objects

TRAVERSE the input array of cards
  FOR EACH card, populate the appropriate set object in the declared array of sets with the various values for each property type

    CREATE a array of keys for the card
    ITERATE through keys of card
    input[key] ADD card[key]

CHECK to see if any of the SET array's sets have a size of 2
  IF any have a size of two, then we don't have. Set
  otherwise, we have a set so return true
revisit 'RULES' & add more test cases (as needed)

---------------------------------------------------------------
*/
/* dry run for algo; (rubber duck phase)
---------------------------------------------------------------
SETSARR = {colors: setObj, numbers: setObj, shades: setObj, shapes: setObj }

input = [
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]

FOR EACh
  card = { color: "green", number: 1, shade: "empty", shape: "squiggle" }
  CREATE a array of keys for the card
    ITERATE through keys of card
    input[key] ADD card[key]

implement with code

---------------------------------------------------------------
*/

function isSet(cards) {
  const cardAttributes = {color: new Set(), number: new Set(), shade: new Set(), shape: new Set()};

  cards.forEach(card => {
    const attrKeys = Object.keys(card);
    attrKeys.forEach(prop => cardAttributes[prop].add(card[prop]));
  });

  const sets = Object.values(cardAttributes);

  return sets.every(attr => attr.size === 1 || attr.size === 3);
} // returns boolean

console.log(isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
])) //> true

console.log(isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
])) //> true

console.log(isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
])) //> false

// ~> 32:41