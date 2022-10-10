/* understanding the problem part 1
input: three measurements

output: 'equilateral', 'isosceles', 'scalene', 'invalid'



 */

/* understanding the problem part 2

requirements (expl, impl):
  - triangles: 'equilateral', 'isosceles', 'scalene', 'invalid'.
  - to be a triangle

  rules:
  - must have three valid integers
  - the smaller two MUST > third'
  - all sides > 0

in my own words...
  ..."take in some measurements, return a string based on the number's relationships to one another"...
 */

/* mental model + steps
roadmap for P.O.D.
...take in three valid INTEGERS
...place into a sorted ARRAY
...return a STRING from hash table

abstract algo + method exploration:
- GUARD for invalid inputs
  - n <= 0 (cannot be negative or zero)
  - typeof n is not a valid number
    - cannot be NaN
    - cannot be Infinity
    - can be a float

- place inputs into a sorted array .sort((a, b) => a - b)
- check that first two are > #3 -> if not 'invalid', else continue
- if all are diff -> scalene
- if all are same -> equilateral
- if two are same -> isosceles

step through with 3 examples:
revisit 'requirements' + as add more test cases as needed
 */

// implement:

function triangle(x, y, z) {
  const err = 'invalid'
  const xyz = [x, y, z];

  if (xyz.some(el => typeof el !== 'number')) {
    return err;
  }
  if (xyz.some(el => isNaN(el))) {
    return err;
  }
  if (xyz.some(el => el === Infinity)) {
    return err;
  }
  if (xyz.some(el => el <= 0)) {
    return err;
  }

  const sortedXYZ = xyz.sort((a, b) => a - b);

  if (!(sortedXYZ[0] + sortedXYZ[1] > sortedXYZ[2])) {
    return err;
  }
  const setxyz = new Set(xyz);

  if (setxyz.size === xyz.length) {
    return 'scalene';
  }
  if (setxyz.size === 2) {
    return 'isosceles';
  }
  return 'equilateral';
}
/*
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene" */
console.log(triangle(1.5, 1.5, 3));
console.log(triangle(2, 2, 3))
/* console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(3, 1));        // "invalid"
console.log(triangle(3, 1, []));        // "invalid"
console.log(triangle());        // "invalid" */
