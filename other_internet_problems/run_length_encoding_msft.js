function solve(input) {
  let finalString = '';
  let quantity = 1;

  for (let idx = 0; idx < input.length; idx += 1) {
    let currChr = input[idx];
    let nextChr = input[idx + 1];

    if (currChr === nextChr) {
      quantity += 1;
      continue;
    }
    finalString += String(quantity) + currChr;
    quantity = 1;
  }
  return finalString;
}

let str = "aaaabbbccdaa";
console.log(solve(str));
