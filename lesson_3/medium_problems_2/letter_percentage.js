/* understanding the problem part 1
input: string

output: object with three properties (lowercase perc, uppercase perc, neither perc)

test cases:

console.log(letterPercentages('abCdef 123')); // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
console.log(letterPercentages('AbCd +Ef')); // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
console.log(letterPercentages('123')); // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
console.log(letterPercentages('')); // invalid input
console.log(letterPercentages('1')); // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

*/

/* understanding the problem part 2

requirements (expl, impl):
  - input will never be an empty string
  - input could be of the wrong type (non-string)
  - property values will be percentages as strings with two decimals
in my own words...
  ..."calculate the number of the various types of chars, with this info, return an object"...
 */

/* mental model + steps
roadmap for POD:
  - string ... three floats ... create obj with properties using floats as strings

abstract algo & method exploration:
  - find length of various match groups
  - use first two lengths to calculate third length (neither group)
  - calculate percentages
  - return object;

step through with 3 examples:

(revisit 'requirements' & as add more test cases as needed)
 */

// implementation...

function letterPercentages(input) {
  if (input === '' || typeof input !== 'string') {
    return null;
  }

  let lowercase = input.match(/[a-z]/g) || 0;
  let uppercase = input.match(/[A-Z]/g) || 0;

  if (lowercase !== 0) {
    lowercase = lowercase.length;
  }

  if (uppercase !== 0) {
    uppercase = uppercase.length;
  }

  let inputLeng = input.length;
  let neither = inputLeng - (lowercase + uppercase);

  lowercase = ((lowercase / inputLeng) * 100).toFixed(2);
  uppercase = ((uppercase / inputLeng) * 100).toFixed(2);
  neither = ((neither / inputLeng) * 100).toFixed(2);

  return {
    'lowercase': lowercase,
    'uppercase': uppercase,
    'neither': neither,
  };

}

console.log(letterPercentages('aaa1')); // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
console.log(letterPercentages('abCdef 123')); // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
console.log(letterPercentages('AbCd +Ef')); // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
console.log(letterPercentages('123')); // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
console.log(letterPercentages('')); // invalid input
console.log(letterPercentages('1')); // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
