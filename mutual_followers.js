// Maximum Distance to the Nearest Occupied Slot
// The function is given a string consisting from "0", "1" characters. The string represents a parking area:

// "1" - the slot is occupied,
// "0" - the slot is vacant.
// Find a vacant slot such that it has the maximum distance from an occupied one. It can be at the ends of the area or between two "1"s. Return the maximum distance as integer.

// Examples
// maxDistance("01") ➞ 1
// // Only the first slot is vacant. Take it. The distance is 1.

// maxDistance("100") ➞ 2 // '101'
// // Take the last slot on the right. The distance is 2.

// maxDistance("100000101") ➞ 3 "100300101"
// // Take the slot at index 3. The distance is 3.

// maxDistance("000010070001001") ➞ 4 "000010000001001"
// // Take the slot at index 0. The distance is 4.
// // The other possible slots at indices 7, 8 have distance 3.

/*
TERMS:
  - "distance" is the absolute distance away from the nearest '1' in the string
  -
input: string "0", "1"

output: integer distance from closest "1"

RULES:
- INPUT IS ALWAYS 1 0
- ALWAYS CLAIMED SPOT
- "1" - the slot is occupied,
- "0" - the slot is vacant.


mental model:
TRANSFORM input string into a list of booleans which represent whether a spot is claimed

if the current element is True (claimed) -> return 0, continue;

if the curr element is False (unclaimed)
  slice a left side and a right side


PRODUCE an array of integers where each element is the distance from a 'claimed Slot'


abstract algo :

SPLIT string into array of elements
TRANSFORM array of strings into array of booleans

DECLARE distance array as empty

TRAVERSE the array of booleans

  if curr value is true
    push 0 into distance array

  declare distance variable (2x)

  for each:
    left side (lastIndexOf(True))
      if -1
        do nothing
        left = -1

      else
        take index of current element - returned value from lastIndexOf() 3 - 2 === distance to claimed spot


      right side (indexOf(True))
      if -1
        do nothing
      else
        take returned value from rightSideArr.lastIndexOf(True) - index of curr element

  if left -1
    just push right into distances array
    else

  compare left and right distances, take the larger and return it

dry run:

indexOf
lastIndex

'001001'

[false, false, true, false, false, true]
distances [2, 1, 0, 1, 1, 0] <- '001001'
*/

/* abstract algo :

SPLIT string into array of elements
TRANSFORM array of strings into array of booleans

DECLARE distance array as empty

TRAVERSE the array of booleans

  if curr value is true
    push 0 into distance array

  declare distance variable (2x)

  for each:
    left side (lastIndexOf(True))
      if -1
        do nothing
        left = -1

      else
        take index of current element - returned value from lastIndexOf() 3 - 2 === distance to claimed spot


      right side (indexOf(True))
      if -1
        do nothing
      else
        take returned value from rightSideArr.lastIndexOf(True) - index of curr element

  if left -1
    just push right into distances array
    else

  compare left and right distances, take the larger and return it
 */
function maxDistance(input) {
  const arrOfStrings = input.split("");
  const claimed = arrOfStrings.map((spot) => spot === "1");
  const distances = [];

  for (let i = 0; i < claimed.length; i++) {
    const spot = claimed[i];

    if (spot) continue;

    const distanceLeft = claimed.slice(0, i).lastIndexOf(true);
    const distanceRight = claimed.slice(i + 1).indexOf(true);

    if (distanceLeft === -1) {
      // not found on left side


    }

    if (distanceRight === -1) {
      // not found on right side


    }
  }

  return distances;
}

console.log(maxDistance("001001")); // [2, 1, 0, 1, 1 0]
/* console.log(maxDistance('000001')) // 5 100001
  console.log(maxDistance('001')) // 2 101
  console.log(maxDistance("100000101")) // ➞ 3 "100300101"
  console.log(maxDistance("000010010001001")) //  ➞ 4 "000010000001001" */
