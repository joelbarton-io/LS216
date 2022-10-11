function solve(str, k) {
  const arr = [];

  for (let i = 0; i < k; i++) {
    arr.push([]);
  }

  let idxMain = 0;
  let idx = 0;


  while (str[idxMain]) {
    if (idx === k) {
      idx = 0;
    }

    arr[idx].push(str[idxMain]);

    idx++;
    idxMain++;
  }
  return arr.map(subarr => subarr.join(''));
}

s = "abcdefghi";
k = 5;

console.log(solve(s, k))
