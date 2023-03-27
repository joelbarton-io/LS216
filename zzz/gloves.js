function numberOfPairs(gloves) {
  // create a tally of the various glove colors
  // based on various tallies, count the number of same color pairs and return this number

  const tally = gloves.reduce((a, c) => {
    a[c] ? a[c]++ : a[c] = 1;
    return a;
  }, {});

  const counts = Object.values(tally);

  const evenOnlyCounts = counts.map(count => {
    return (count % 2 === 1) ? (count - 1) : count;
  });

  return evenOnlyCounts.reduce((a, c) => a + c, 0) / 2;
}

console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]))