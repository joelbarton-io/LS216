let str = "k5(a3(b(c2(d))))"; // abcddbcddbcdd
let str3 = '3(ab)';
function extend(text) {
  let result = '';

  while (str.length) {
    let left = str.lastIndexOf('(');
    let right = str.indexOf(')');

    if (left === -1 || right === -1) { // no more parens
      if (str.slice(-1).match(/\d/g)) {
        let newResult = str.slice(0, str.length - 2).concat(result);
        const count = Number(str.slice(-1));
        let asArr = new Array(count);
        result = asArr.fill(newResult).join(''); // multiplication sub-routine
      } else {
        result = str.concat(result);
        break;
      }
    }

    let content = str.slice(left + 1, right); // content we want
    let leftRem = str.slice(0, left); // left side
    let rightRem = str.slice(right + 1); // right side

    if (leftRem.slice(-1).match(/\d/g)) {
      let newResult = content.concat(result);
      const count = Number(leftRem.slice(-1));
      let asArr = new Array(count);
      result = asArr.fill(newResult).join(''); // multiplication sub-routine
      str = leftRem.slice(0, left - 1) + rightRem;
    } else {
      result = content.concat(result);
      str = leftRem + rightRem;
    }


  }
  return result;

}
console.log(result);


/*
guard for:
  - string inputs without any parens
  - empty strings


find `middle` element(s)

start from element(s) and work outwards (left and right) adding either to the left of result or the right of result


get last index of '(' and first index of ')', store these indices in variables

if there's anything in between these values, process it and use it as the initial value of our `result` string
  - there's a possibility that there are number strings in this initial value so apply multiplication as needed


move
*/