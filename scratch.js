/* function convert(num, index, arr) {
  // console.log(num, index, arr);
  return String(num * arr.length ** index);
}

const transformedArray = [1, 2, 3].map(convert);
console.log(transformedArray);
 */

function ascending(input) {
  let count;
  
  if (input.length % 2 === 0) {
    count = input.length / 2;
  } else {
    count = (input.length - 1) / 2;
  }

  const allChunks = [];
  for (let chkLeng = 1; chkLeng < count; chkLeng++) {
    const chunks = [];

    for (let i = 0; i < input.length; i += chkLeng) {
      if (input.length % chkLeng === 0) {
        chunks.push(input.slice(i, i + chkLeng));
      }
    }

    if (chunks.length > 0) {
      allChunks.push(chunks)
    }
  }
  const result =[];

  for (let i = 0; i < allChunks.length; i++) {
    const chunk = allChunks[i];

    if (allAscending(chunk)) {
      result.push(true);
    }
  }

  if (result.length >= 1) {
    return true;
  } else {
    return false;
  }
}

function allAscending(arr) {
  let result = true;

  for (let i = 0; i < arr.length - 1; i++) {
    const curr = Number.parseInt(arr[i]);
    const next = Number.parseInt(arr[i + 1]);

    if (next !== (curr + 1)) {
      result = false;
      break;
    }
  }

  return result;
}

// console.log(allAscending([1, 2, 3]))

console.log(ascending("232425")) // ➞ true // 3 examples of ascending
/* console.log(ascending("2324256")) //➞ false
console.log(ascending("444445")) //
console.log(ascending("123")) // true
console.log(ascending("12")) // true
console.log(ascending("32")) // */
/* console.log(ascending("100101102")) // true -> 9 - 1 / 2 -> 4 */
/* console.log(ascending("")) // ERROR */
