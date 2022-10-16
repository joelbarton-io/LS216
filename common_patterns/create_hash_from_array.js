function hashFromArray(arr) {
  return arr.reduce((acc, cv) => {
    // optionally, standardize element class...
    // cv = Boolean(cv);
    // cv = Number(cv);
    // cv = String(cv);

    if (acc[cv]) {
      acc[cv]++;
      return acc;
    }

    acc[cv] = 1;
    return acc;
  }, new Object());
}

console.log(hashFromArray([1, 2, 3, 4, 5, 5, 5, 1, 2]));
console.log(hashFromArray([[], {}, {}, new Set(), Math.max(), null, undefined]));
