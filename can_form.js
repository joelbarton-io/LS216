/* Write a function that returns true if all the strings in an array can be formed by using only the characters from the longest string.

Examples
canForm(["mast", "manifest", "met", "fan"]) ➞ true

canForm(["may", "master", "same", "reams"]) ➞ false

canForm(["may", "same", "reams", "mastery"]) ➞ true
Notes
There will only be one unique longest string. */

/*

Q:
1. will the input always be an array? -> No, handle with error message
2. will the array elements always be strings? Yes
3. what if there is a tie for the longest string? There will be a clear 'longest'
4. does case matter? No, should be case insensitive

input: array of string elements (potentially empty strings)
output: boolean
RULES:
  - must be case insensitive so 'S' in longest and 's' in another element
  - there will always only be one 'longest' string

mental model:

- determine if all the non-longest strings can be formed by the characters contained within the longest string
- once a letter is 'consumed' from the longest string, it is not longer available in the pool of letters to draw from
- plan to represent target word as a dictionary object with letter counts

abstract algo :

GUARD against invalid inputs ([], wrong datatypes: objects, strings, etc...)

(map) TRANSFORM each string in the input array to lowercase

LOCATE and find 'longest' string (1st helper)
  indexOflongest;
  set a initial to 0
  traverse array of strings
    if curr element's length is longer than the counter, reassign counter to curr length
      and reassign indexOfLongest

  get word at indexOfLongest


CREATE a result array []

TRAVERSE the array of strings and for each string:

  split string into array of elements (boolean outcome)
    IF every chr returns true, then we return true from the inner loop

    DECLARE new "longest" object
        declare an empty object
        traverse elements of longest string
          if the element is present, incrementby 1
          else, populate object with that element and assign value to 1



    (every) CHECK if the current element can be found in the "longest" object
      if yes (
        if longest[currWord[i]] === 1
          delete that property
        else
          decrement that property by 1
      )
      else return false

    push result of (every) into result array

RETURN check if every element in the result array is true

dry run:

*/
function canForm(input) {
  if (!Array.isArray(input)) return "ERROR";
  if (input.length === 0) return "ERROR";
  if (input.every((word) => word === "")) return true;

  const cleanedInput = input.map((str) => str.toLowerCase());
  let longest = findLongest(cleanedInput);

  const result = [];

  for (let idx = 0; idx < cleanedInput.length; idx++) {
    const currWordArr = cleanedInput[idx].split("");
    const dict = asDictionary(longest);

    result.push(
      currWordArr.every((chr) => {
        if (dict[chr]) {
          if (dict[chr] === 1) {
            delete dict[chr];
          } else {
            dict[chr]--;
          }
          return true;
        }
        return false;
      })
    );
  }

  return result.every((bool) => bool);
}

function asDictionary(longestString) {
  const result = {};
  for (let i = 0; i < longestString.length; i++) {
    const chr = longestString[i];

    if (result[chr]) {
      result[chr]++;
    } else {
      result[chr] = 1;
    }
  }
  
  return result;
}

function findLongest(arr) {
  let maxLeng = 0;
  let indexOfLongest;

  arr.forEach((word, idx) => {
    if (word.length > maxLeng) {
      maxLeng = word.length;
      indexOfLongest = idx;
    }
  });

  return arr[indexOfLongest];
}

console.log(canForm(["hi", "helicopter", "cop", "leer"])); // true (happy path)
console.log(canForm(["hi", "HELICOPTER", "cop", "leer"])); // true (case insensitive)
console.log(canForm(["hi", "helicopter", "cop", "cop", "cope", "leer"])); // true (duplicates in array)
console.log(canForm(["hiiiii", "helicopter", "cop", "leer"])); // false (onced used, out of pool) (dictionary for longest)
console.log(canForm(["heck", "helicopter", "cop", "leer"])); // false
console.log(canForm(["mast", "manifest", "met", "fan"])); // true
console.log(canForm(["may", "master", "same", "reams"])); // false
console.log(canForm(["may", "same", "reams", "mastery"])); // true

// edge cases:
console.log(canForm(["", "helicopter", "", ""])); // true
console.log(canForm(["", "", "", ""])); // ERROR
console.log(canForm(undefined)); // ERROR
console.log(canForm([])); // ERROR

// ~> 47:00
