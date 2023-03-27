function highestRank(arr) {

  const tally = (arr) => {
    return arr.reduce((acc, cur) => {
      cur in acc ? acc[cur]++ : acc[cur] = 1;
      return acc;
    }, {});
  }

  const haveMaxFreq = (sortedEntries, maxFreq) => {
    return sortedEntries.filter(([, freq]) => freq === maxFreq);
  }


  const numCounts = tally(arr);
  const sortedEntries = Object.entries(numCounts).sort(([, a], [, b]) => b - a);
  const maxFreq = sortedEntries[0][1];
  const highestFreqNums = haveMaxFreq(sortedEntries, maxFreq);
}

console.log(highestRank([12, 10, 4, 4, 8, 12, 7, 6, 4, 10, 12]));