/* understanding the problem part 1
assumptions:
  - input is a non-zero, natural number


input: a positive natural number

output: the next featured number that meets the below requirements

examples/test cases:

 */

/* understanding the problem part 2

requirements (expl, impl):
  - "featured number"
    - is ODD
    - is divisible by 7
    - has no duplicate integers

in my own words...
  ..."starting at input number plus 1 or two, check its value against the conditions that determine if it is a 'featured number'.  continue until we reach the max number, at which point we can return a string message and exit"...
 */

/* mental model + steps
roadmap for P.O.D.:
  ... input NUMBER
    ... CHECK if number as set is same size as number as array
    ... CHECK divisibility of number to 7

abstract algo & method exploration:

GUARD against invalid inputs
  - type, number's magnitude (beyond MAX possible value), negative or zero or NaN or (+/-)Infinity

CHECK if even; increment by 1

start LOOPING
  WHILE curr <= max possible featured number
    CHECK if curr is divisible by 7
      YES?
        CHECK if currAsSet.size === currAsArray.length
          RETURN curr
      NO?
        increment by 2
        CONTINUE


step through with 3 examples:

(revisit 'requirements' & as add more test cases as needed)
 */

// implementation...

function featured(input) {
  const MAX_FEATURED_NUM = 9876543201;
  if (typeof input !== 'number' || input < 1 || isNaN(input) || input === Infinity || input === -Infinity) {
    return 'invalid input';
  }

  if (input === MAX_FEATURED_NUM) {
    return "There is no possible number that fulfills those requirements."
  }

  input += (input % 2 !== 1) ? 1 : 2;

  while (input <= MAX_FEATURED_NUM) {
    let str = String(input);
    if (input % 7 === 0 && (new Set(str)).size === str.length) {
      return input;
    }
    input += 2;
  }
}
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."