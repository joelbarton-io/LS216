// two sorted arrays containing unique integers, find common elements

function findCommonHashTable(one, two) {
  const makeHashTable = (acc, curr) => {
    if (!(curr in acc)) acc[curr] = true;
    return acc;
  }
  const ONE_TABLE = one.reduce(makeHashTable, {});

  for (let i = 0; i < two.length; i++) {
    if (two[i] in ONE_TABLE) console.log(two[i]);
  }
}

let one = [13, 27, 35, 40, 49, 55, 59];
let two = [17, 35, 39, 40, 55, 58, 60];

console.log(findCommonHashTable(one, two))// 35, 40, 55