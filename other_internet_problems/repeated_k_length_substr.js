function solve(str, k) {
  const hash = {};
  let counter = 0;
  for (let idx = 0; idx <= str.length - k; idx++) {
      let substr = str.slice(idx, idx + k);


      if (hash[substr]) {
          counter += 1;
          continue;
      }
      hash[substr] = true;
  }
  return counter;
}

console.log(solve('abcdabc', 3))
