function ascending(input) {
  if (typeof input !== 'string' || input.length < 2) return 'invalid input!';

  const count = (input.length % 2 === 0) ? input.length / 2 : (input.length - 1) / 2;
  const allChunks = getChunks(count, input);
  const result = [];

  for (let i = 0; i < allChunks.length; i++) {
    const chunk = allChunks[i];

    if (allAscending(chunk)) {
      result.push(true);
    }
  }

  return result.length >= 1;
}

function getChunks(count, input) {
  const allChunks = [];

  //
  for (let chkLeng = 1; chkLeng <= count; chkLeng++) {
    const chunks = [];

    for (let i = 0; i < input.length; i += chkLeng) {
      if (input.length % chkLeng === 0) {
        chunks.push(input.slice(i, i + chkLeng));
      }
    }

    if (chunks.length > 0) allChunks.push(chunks);
  }
  return allChunks;
}

function a(input) {
  
}

function allAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const curr = Number.parseInt(arr[i]);
    const next = Number.parseInt(arr[i + 1]);

    if (next !== (curr + 1)) {
      return false;
    }
  }

  return true
}

// console.log(allAscending([1, 2, 3]))

console.log(ascending("232425")) // ➞ true // 3 examples of ascending
console.log(ascending("2324256")) //➞ false
console.log(ascending("444445")) // -> true
console.log(ascending("123")) // true
console.log(ascending("12")) // true
console.log(ascending("32")) // false
console.log(ascending("100101102")) // true
console.log(ascending("")) // ERROR
