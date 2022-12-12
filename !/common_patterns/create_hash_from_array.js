function hashFromArray(arr) {
  return arr.reduce(callback, new Object());
}

function callback(acc, cv) {
  // optionally, standardize element class...
  // cv = Boolean(cv);
  // cv = Number(cv);
  // cv = String(cv);

  acc[cv] ? acc[cv]++ : acc[cv] = 1;
  return acc;
}

console.log(hashFromArray([1, 2, 3, 4, 5, 5, 5, 1, 2]));
console.log(hashFromArray([[], {}, {}, new Set(), Math.max(), null, undefined]));
