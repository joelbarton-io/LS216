function solve(string) {
  if (string.length === 0) {
    return 0;
  }

  const uniques = string.match(/([A-Za-z])\1*/g);
  let result = 0;

  for (let idx in uniques) {
    let current = uniques[idx];

    if (current.length === 1) {
      result += 1;
      continue;
    }
    let num = current.length;
    let currentValue = (num * (num + 1) / 2);
    result += currentValue;
  }

  return result;
}
let s = "yrrrexbxvdpabyzboxknrvtibyweyybjhodftthclwgvsqzclapa";

console.log(solve(s));

// 2 a -> 1 (1 single)
// 3 aa -> 3 (2 singles, 1 double)
// 4 aaa -> 6 (3 singles, 2 doubles, 1 triple)
// 5 aaaa -> 10 (4 singles 3 doubles, 2 triples, 1 full)
// 6 aaaaa -> 15 (5 singles, 4 doubles, 3 triples, 2 quads, 1 full)