// HOW DOES `Object.fromEntries(entries)` work when dealing with a 'sorted' array?

/* problem description:
Create a function that takes an array of students and returns an object representing their notes distribution. Keep in mind that all invalid notes should not be counted in the distribution. Valid notes are: 1, 2, 3, 4, 5
*/
/* questioning (interrogate the problem & interviewer; establish the rules)
---------------------------------------------------------------
questions:
1. will the input always be an array of objects?
  - empty array?
  - wrong datatype altogether
2. will those objects in the input array always have the 'notes' property?
  - what to do in the event that the input is invalid
  - are the arguments always going to be valid objects? (plain? or some other type of object)

terms: 'note': grade of some kind?

input: array of student objects

output: array that contains the distribution of the aggregate notes of the students

center case:
  - input is valid and there are not invalid notes in the array referenced by notes for each respective student


RULES:
  - valid 'notes' are 1-5 inclusive
  -

---------------------------------------------------------------
*/
/* outlining (validate assumptions)
---------------------------------------------------------------

rephrase: ..."transforming an array of objects into a simple, singular object"...

mental model/roadmap:
<- ARRAY of student OBJECTS
... [transformation operations]
-> distribution OBJECT

exploration:

---------------------------------------------------------------
*/
/* steps (establishing MM & flow of data from input to output)
---------------------------------------------------------------

abstract algo :

DECLARE distribution object
DECLARE allNotes array
TRAVERSE input array of student objects

POPULATE some array object with all the note values (including invalid values)
  FOR EACH student object
    ACCESS the value of 'notes'
    push curr value into ...allnotesArr

FILTER the invalid notes -> CREATE new array of valid notes ([1, 2, 3]) not including -1, 0
  CONVERT curr element to a string
  CHECK IF curr el is included inthe array of valid notes


TRAVERSE validNOTES array
  if distribution object contains a property that matches the value of the current 'note'
    INCREMENT value of current property in distribution object
  OTHERWISE
    add that property to the distribution object and initialize its value to 1

RETURN distribution object

revisit 'RULES' & add more test cases (as needed)

---------------------------------------------------------------
*/
/* dry run for algo; (rubber duck phase)
---------------------------------------------------------------

step through algo with examples from center and and edge cases

implement with code

---------------------------------------------------------------
*/


function getNotesDistribution(students) {

  const distributions = {};
  const allNotes = [];
  students.forEach(student => allNotes.push(...student.notes));
  const validNotes = allNotes.filter(note => [1, 2, 3, 4, 5].includes(note));

  validNotes.forEach(note => {

    if (distributions[String(note)]) {
      let currValue = distributions[String(note)]
      distributions[String(note)] = currValue + 1;
    } else {
      distributions[String(note)] = 1;
    }

  });

  const sorted = Object.entries(distributions).sort(([, a], [, b]) => b - a);
/*
  const result = {};

  sorted.forEach(entry => {
    let key = entry[0];
    let val = entry[1];
    result[key] = val;
  }) */
  return Object.fromEntries(sorted);
}

console.log(getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
]));

/* RETURNS:
{
  5: 3,
  3: 2,
  2: 1
}) */


const invalid1 = [];

const invalid2 = [
  {
    "name": "John",
    'age': 22,
    "notes": [3, 2, 5, 0, -3]
  }
];

const invalid3 = [
  {
    "name": "John",
    "notes": '[3, 2, 5, 0, -3]',
  }
];

const invalid4 = 'im a string';

/*
console.log(getNotesDistribution(invalid1)); // default error message
console.log(getNotesDistribution(invalid2)); // default error message
console.log(getNotesDistribution(invalid3)); // default error message
console.log(getNotesDistribution(invalid4)); // default error message */