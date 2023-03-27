
// questions were ok
// adhere more strictly to a note taking process

/*

// A group of n friends are going to see a movie. They would like to find a spot where they can sit next to each other in the same row.

// Create a function that, given a seat layout and the number of friends n, returns the number of available spots for all n friends to sit together.
/*
groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 0],
], 4) //➞ 2

// intitial variation
groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 0],
], 2) //➞ 4


// diff length subarrays (rows)
groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0],
], 4) //➞ 1


// edge case empty subarrays
groupSeats([
  [],
  [],
], 2) //➞ 0

groupSeats([], 2) //➞ 0



// smaller test case
groupSeats([
  [0, 0],
  [1, 1],
], 2) //➞ 1

 */
/*
input:
  first arg: array of arrays of Number integers (1, 0)
  second arg: always an integer

"matrix" [nested iteration] -> number

main:

input validation for empty input or empty subarrays leaving for end


transform input's elements from arrays of integers into strings of 1s and 0s
['00', '11']


helper function -> returns count of matches
let toMatch = '0000'
'0100000' -> i < str.length - toMatch.length
    ^

    declare counter
-> traverse an array (row) -> check if there are any consecutive runs of (arg2 * 0)
  -> traverse the string

return counter

4:55 -> 5:35
*/

function helper(row, toMatch) {
  let counter = 0;
  let end = row.length - toMatch.length + 1;

  for (let i = 0; i < end; i++) {
    let candidate = row.slice(i, i + toMatch.length);
    if (candidate === toMatch) counter++;
  }

  return counter;
}

function groupSeats(seats, friends) {
  if (seats.length === 0) return 0;

  const seatsAsString = seats.map(row => {
    return row.join('');
  });

  let toMatch = '';

  for (let i = 0; i < friends; i++) {
    toMatch += '0';
  }

  const numsOfmatches = seatsAsString.map(row => helper(row, toMatch));

  console.log(numsOfmatches.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }));
}

groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 1, 0, 0]
], 7) // 1

groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  []
], 7) // 1


groupSeats([
  [1, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0]
], 3) // 2

groupSeats([
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0]
], 4) // 1

groupSeats(
  [
    [1, 0, 1, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 0]
  ], 2) // 4

  * /




// Write a function that removes the last vowel in each word in a sentence.

/*
INPUT:
    - argument(s) is always be string,
    at least 1 arg is given

    WORD -> consecutive cluster of alphanumeric chrs (excluding spaces)


OUTPUT:
    str
    arr of strings

MUST PRESERVE original spaces and nonalphanumerics for stitching later

identifying words
.match(/[^a-z0-9]+/gi) -> non words
.match(/[1-9a-z]+/gi) - words

preserving original string's non alphanumerics (in order of appearance)



ALGO:

cache inputs into an array (spead)

generate list of 'WORDS'

generate list of not words


"123e&elephante hello" -> [ '&', ' ' ]
"123e&elephante hello" -> "123e, elephante, hello"


for each word, remove last vowel if present

in the case where there's just one chr and it's a vowel, that 'word' becomes single empty space
*/

function removeLastVowel(...input) {
  if (input.length === 1 && input[0] === '') return '';

  return input.map(transformInput); // if length of input is 1 return first element otherwise return array
}

function transformInput(str) {
  let words = str.match(/[0-9a-z]+/gi) || [];
  let nonWords = str.match(/[^a-z0-9]+/gi) || [];

  if (words.length === 0) return nonWords.join(''); //
  if (nonWords.length === 0) return removeVowel(words[0]);

  let transformedWords = words.map(removeVowel);

  return buildResult(transformedWords, nonWords, str);
}

function removeVowel(word) {
  let reversed = word.split('').reverse();
  let needToRemove = true;
  let result = '';

  for (let i = 0; i < reversed.length; i++) {
    let chr = reversed[i];
    if (chr.match(/[aeiou]/gi) && needToRemove) {
      needToRemove = false;
    } else {
      result += chr;
    }
  }

  return result.split('').reverse().join('');
}

function buildResult(words, nonWords, originalStr) {
  if (originalStr[0].match(/[a-z0-9]/gi)) {
    return words.map((word, i) => {
      return word + (nonWords[i] || "");
    }).join('');
  } else {
    return words.map((word, i) => {
      return (nonWords[i] || "") + word;
    }).join('');
  }
}

// function processWord(word) {
//   let lastVowelIdx = word.match(/[aeiou][^aeiou]*$/i).index;
//   return word.slice(0, lastVowelIdx) + word.slice(lastVowelIdx + 1);
// }

// function addArrays(starterArr, otherArr) {
//    let result = starterArr.flatMap((element, idx) => [element, otherArr[idx]] );
//    if (starterArr.length > otherArr.length && otherArr.length !== 0) result.push(starterArr[starterArr.length - 1]);
//    return result;
// }

// function removeLastVowel(str) {
//   let words = str.match(/[a-z0-9]+/gi) || [];
//   let nonWords = str.match(/[^a-z0-9]+/gi) || [];
//   words = words.map(word => processWord(word));
//   if (str[0].match(/[a-z0-9]/i)) {
//     return addArrays(words, nonWords).join("");
//   } else {
//     return addArrays(nonWords, words).join("");
//   }
// }

console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly.  & ")); // __Thos wh dar t fal miserbly cn achiev gretly."


// all vowels
console.log(removeLastVowel("a e i o u A E I")); // "       " (x7 spaces)

// happy path
console.log(removeLastVowel("Those")); // Thos."

str = 'those'
idx = 0


console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly.")); // Thos wh dar t fal miserbly cn achiev gretly."
console.log(removeLastVowel("  Those who dare to fail miserably can achieve greatly.")); // Thos wh dar t fal miserbly cn achiev gretly."
// case insensitive
console.log(removeLastVowel("Those whO dare to fail miserably can achieve greatly.")); // Thos wh dar t fal miserbly cn achiev gretly."
// arg * 2
console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly.", 'Those')); // [Thos wh dar t fal miserbly cn achiev gretly.", 'Thos']
// expanded spaces
console.log(removeLastVowel("Those who dare  to fail miserably  can achieve greatly.")); // Thos wh dar  t fal miserbly  cn achiev gretly."
console.log(removeLastVowel("  Those who dare to fail miserably can achieve greatly.")); // __Thos wh dar t fal miserbly cn achiev gretly."
// special chrs
console.log(removeLastVowel("  ###`. &&&& 123 le")); // "  ###`. &&&& 123 l"
console.log(removeLastVowel("bade&elephante")) // bad&elephant
console.log(removeLastVowel("123e&elephante")) // 123&elephant    -> 123e elephante
// 'empty string
console.log(removeLastVowel("")); // ""
console.log(removeLastVowel("    ")); // "    "
// no vowels
console.log(removeLastVowel("zzzzzz")); // "zzzzzz"
// no words
console.log(removeLastVowel("  ###`. &&&&")); // "  ###`. &&&&"


/*
Write a function that accepts intervals and returns the sum of all the interval lengths.

ex:

let input = [[1, 3], [4, 6], [8, 12]];

fn(input) returns 8
*/




// Convert a list of number to their interval list
/*
Input:
  ONe arg -> array of numbers (+/- integers (includes 0))


Output:
  single []
    string range representations or solitary nums

SUMMARY:

array of +/- ints   ->   array of range or solitary number representations


ALGO:

MAIN:

  - process input (remove duplicate elements from input array)
  - sorting unique elements array in ascending order

  - iterate over sorted, unique array elements

  - with two pointers (left, right)
    - check to see if the left + 1 === right
      - true?
        ->
      - false?
        -> check if there was a range in play and if so, catalog range
          otherwise, add that left element to result array

  - guard here for leftover range


makeUnique:
  -> given the input, remove all duplicate elements and return

sortAscending:
  -> given unique array, sort in ascending order (- to +) and return

*/
function makeUnique(inputArr) {
  return Array.from(new Set(inputArr));
}


function sortAscending(uniques) {
  return uniques.sort((a, b) => a - b);
}


function numbersToRanges(input) {
  if (!input.length) return [];
  if (input.length === 1) return [String(input[0])];

  const processed = sortAscending(makeUnique(input));

  const result = []
  let tempStart; // 3

// [3, 4, 5, 10, 11, 12, 100]
//                    ^. ^
  // let left;
  // let right;

  // for (let i = 1; i < processed.length + 1; i++) { // why did i miss this??
  //   left = processed[i - 1];
  //   right = processed[i];

  //   if ((left + 1) === right && tempStart === undefined) { // start of interval
  //     tempStart = left;
  //   } else {
  //     if (tempStart) {
  //       let str = String(tempStart) + "-" + String(left);
  //       result.push(str);
  //       tempStart = undefined;
  //     } else {
  //       result.push(String(left));
  //     }
  //   }


  // }

  for (let i = 0; i < processed.length; i++) {
    let left = processed[i];
    while (processed[i+1] - processed[i] === 1) i++;
    let right = processed[i];
    (left === right) ? result.push(String(left)) : result.push(`${left}-${right}`);
  }

  return result;

}


/*
console.log(numbersToRanges([3, 4, 5, 10, 11, 12]))


// duplicate elements in input
console.log(numbersToRanges([5, 5, 4, 3, 10, 11, 12])); // ["3-5", "10-12"]
 */

// solitary number in input
console.log(numbersToRanges([5, 4, 3, 10, 11, 12, 100, 101, 102, 103])); // ["3-5", "10-12", "100"]


/* // negative range
console.log(numbersToRanges([-10, -9, -8, -7, -6, -5])); // ["-10--5"]

// includes zero in range
console.log(numbersToRanges([-1, 0, 0, 1, 100])); // ["-1-1", "100"]

// length 1
console.log(numbersToRanges([5])); // ["5"]

// empty
console.log(numbersToRanges([])); // []
 */
