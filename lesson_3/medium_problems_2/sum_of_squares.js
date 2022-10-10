/* understanding the problem part 1
---------------------------------------------------------------
input>>>>>>>>> number

output>>>>>>>> number

test cases:

requirements:

---------------------------------------------------------------
*/
/* understanding the problem part 2
---------------------------------------------------------------

in my own words...
  ...""...

ds roadmap:

---------------------------------------------------------------
*/
/* mental model & steps
---------------------------------------------------------------

abstract algo & method exploration:

ITERATE from 1 upto and including input n
  INCREMENT both values by the current n operation (respective operations)

RETURN difference;

(revisit 'requirements' & as add more test cases as needed)
---------------------------------------------------------------
*/
/* test
---------------------------------------------------------------

step through with 3 examples

implement with code
---------------------------------------------------------------
*/

function sumSquareDifference(n) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let i = 1; i <= n; i++) {
    sum += (i);
    sumOfSquares += (i ** 2);
  }

  return (sum ** 2) - sumOfSquares;
}
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
