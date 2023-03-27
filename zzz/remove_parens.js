// function removeParentheses(s){
//   if (s.indexOf('(') == -1) return s;

//   // two paths:
//   // 1. add letter
//   // 2. count parens until the match

//   let res = '';
//   let i = 0;

//   while (i < s.length) {
//     const char = s[i];

//     if (!char.match(/[()]/g)) {
//       res += char;
//     } else {
//       let otherIndex = i;

//       let left = 1;
//       let right = 0;
//       let other = s[otherIndex];

//       while (left != right) {
//         if (other.match(/[(]/g)) {
//           left += 1;
//         } else if (other.match(/[)]/g)) {
//           right += 1;
//         }

//         otherIndex++;
//       }

//       i = otherIndex;


//       /*
//       declare left/right parens count variable

//       set i to location where they balance

//       */

//     }
//   }
//   i++;

//   return res;
// }

// console.log(removeParentheses("AAAAAAAA(unwanted thing)BBBBBBBB"))



// // two paths:
// // 1. add letter
// // 2. count parens until the match


function removeParentheses(s) {
  if (s.indexOf('(') == -1) return s;

  let res = '';
  let i = 0;

  while (i < s.length) {
    const char = s[i];

    if (!char.match(/[()]/g)) {
      res += char;
    } else {
      let count = 1;

      while (count != 0) {
        let other = s[i + 1];

        if (other.match(/[(]/g)) {
          count++;
        } else if (other.match(/[)]/g)) {
          count--;
        }
        i++;
      }
    }
    i++;
  }

  return res;
}

console.log(removeParentheses("AAAAAAAA(unwanted thing)BBBBBBBB"))


// var nbrOfLaps = function (b, c) {
//   const findFactors = x => {

//     const factors = {};
//     factors[x] = true;

//     let divisor = 1;
//     let max = Math.floor(x / 2);

//     while (divisor <= max) {
//       if (x % divisor === 0) factors[divisor] = true;
//       divisor++;
//     }

//     return factors;
//   }

//   if (b === c) return [b / b, c / c];

//   let div;
//   const bFactors = findFactors(b);
//   const cFactors = findFactors(c);

//   for (let el of Object.keys(bFactors)) { if (cFactors[el]) div = Number(el) }

//   b = b / div;
//   c = c / div;

//   if (div === 1) {
//     return [c, b]
//   }

//   return [b, c];
// }

// console.log(nbrOfLaps(4, 6), [3, 2]);
// console.log(nbrOfLaps(2, 3), [3, 2]);
// console.log(nbrOfLaps(5, 3), [3, 5]);
// console.log(nbrOfLaps(183, 69));
// console.log(nbrOfLaps(5, 5), [1, 1]);
// console.log(nbrOfLaps(4776, 6195), [1592, 2065])


// /* var nbrOfLaps = function (b, c) {

//   const even = x => x % 2 === 0;
//   const odd = x => x % 2 === 1;
//   const findFactors = x => {

//     const factors = {};
//     factors[x] = true;

//     let divisor = 1;
//     let max = Math.floor(x / 2);

//     while (divisor <= max) {
//       if (x % divisor === 0) factors[divisor] = true;
//       divisor++;
//     }

//     return factors;
//   }

//   if ((odd(b) && odd(c)) || (even(b) && even(c))) {
//     if (b === c) return [b / b, c / c];

//     let div;
//     const bFactors = findFactors(b);
//     const cFactors = findFactors(c);

//     for (let el of Object.keys(bFactors)) { if (cFactors[el]) div = Number(el) }

//     b = b / div;
//     c = c / div;
//   }

//   return [c, b];
// } */