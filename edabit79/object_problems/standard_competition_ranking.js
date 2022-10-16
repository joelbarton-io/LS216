/*
Questions:

1. Will there always be two arguments? NO
2. Will the first argument always be a valid object? (has values, not empty); (has appropriate keys/values) YES
3. Will the values always be numbers? always integers, sometimes string ints
4. Will the numbers always be integers? (no special numbers types like NaN, infinity, floats, bigints, etc) YES or string int
5. Does case matter? {James: 31, james: 61} -> are they two different people? (specifically about second arg) YES

input:
  1. hash containing (key: name) (value: score)
  2. a name of a competitor

output:
  -> the relative rank of the passed-in player

RULES:
  - object will always have the necessary keys, values can sometimes be of wrong type
  - case MATTERS for names ("James" !== "james")
  - ties at a rank means that n ranks are skipped
    - if there is a n-way tie at some rank, take the rank and add n, this value is the next rank

edge cases:
  - when wrong number of arguments
  - when a value in the object is of the wrong type (string ints)
  - multiple 'same' names with different case (diff people)
  -
mental model:
  - take in object with keys and values

  - produce a rank object that has all the player's relative ranks
  - using that rank object, return the rank of the passed-in player

algo :
GUARD against:
  - wrong number of arguments, so when an an arg is undefined
  - invalid type for each arg
    - first must be an object (not null, nor an array)
    - second must be a non empty string

CREATE an array of entries from input object
ENSURE all values [key, value][0] are integers (parseInt)
SORT entries ascending by value

DECLARE a rank hash

declare secondary variable tempTie
TRAVERSE the sorted entries array from the second el (index 1)
    (POPULATE rank hash with the appropriate value)

    if prev.score === curr.score
      assign secondary variable to curr index
      rank[prev_name] = tempTie
    if prev.score > curr.score
      set rank[prev_name] = index


dry run:
tempTie = 2
index = 3
[
  [George, 96],
  [Emily, 95],
  [Susan, 95],
  [Jane, 89],
  [Brett, 82]
]

ranks {
  George: 1,
  Emily: 2,

}

GUARD against:
  - wrong number of arguments, so when an an arg is undefined
  - invalid type for each arg
    - first must be an object (not null, nor an array)
    - second must be a non empty string

CREATE an array of entries from input object
ENSURE all values [key, value][0] are integers (parseInt)
SORT entries ascending by value

DECLARE a rank hash

declare secondary variable tempTie
TRAVERSE the sorted entries array from the second el (index 1)
    (POPULATE rank hash with the appropriate value)

    if prev.score === curr.score
      assign secondary variable to curr index
      rank[prev_name] = tempTie
    if prev.score > curr.score
      set rank[prev_name] = index


*/
function competition_rank(hash, playerName) {
  if (typeof hash !== 'object' || Array.isArray(hash) || hash === null) return 'invalid first argument!';
  if (typeof playerName !== 'string' || playerName === '') return 'invalid second argument!';

  const entries = Object.entries(hash).map(([key, val]) => [key, Number.parseInt(val)]).sort(([, a], [, b]) => b - a);

  const ranked = {};
  let tempTie;

  for (let rank = 0; rank < entries.length; rank++) {
    if (Object.entries(ranked).length === 0) { // for the first pass
      ranked[entries[0][0]] = rank + 1;
      continue;
    }
    const prev = entries[rank - 1];
    const curr = entries[rank];

    if (prev[1] === curr[1]) { // tie
      tempTie = rank;
      ranked[curr[0]] = tempTie;
    } else {
      ranked[curr[0]] = rank;
    }



  }

  return ranked;
}

console.log(competition_rank({
  George: '95',
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
  }, "Jane")) //➞ 4


  /* competition_rank({
  George: 96, 1
  Emily: 95, 2
  Susan: 95, 2
  Jane: 90, 4
  Brett: 80 5
  }, "Jane") ➞ 4 */