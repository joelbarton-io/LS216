/*
  problem:
    i: 1) array of numbers (+/-, including 0)
       2) number (target) (+/-, including 0)
    o: two element array containing a pair of nums which sum to target
      -> if no pair exists: undefined

    need to get diff of target - currEl

  examples:

  data structure:
  target = 10

  [11, 3, 7, 5]
       ^
  complements = {
    #  -> [comp, idx]
    11 -> [-1, 0],
    3  -> [7, 1],
    7  -> [3, 2],
    5  -> [5, 3],
  }

  pairsThatSum = [
    [3, 7, 2],
  ]

  algorithm:

  DECLARE complements obj

  TRAVERSE `nums` (build comp)
    for each el, subtract element from target and push result -> complements

  DECLARE pairsThatSum [] / {}

  TRAVERSE `nums` (checking for other value in origArr as obj)
    check if the curr el's val in complements exists as a key in complements
      if it does exist, store this pair in an array of arrays (or a new obj)
      along with the index of the complement


  if pairsThatSum only has one set of values: return that set
  otherwise (multiple pairs that sum to target):

  */
// INITIAL (failed)
// function sumPairs(nums, target) {
//   const comp = {};

//   nums.forEach((num, idx) => {
//     let diff = target - num;
//     comp[diff] = [num, idx];
//   });

//   const pairsThatSum = [];

//   nums.forEach((num, idx) => {
//     let diff = comp[comp[num][0]]
//     if (diff) {
//       let idxOfDiff = comp[diff][1]
//       pairsThatSum.push([num, diff, idxOfDiff]);
//     }
//   });

//   if (pairsThatSum.length === 0) return undefined;
//   if (pairsThatSum.length === 1) return pairsThatSum[0].slice(0, 2);

//   return pairsThatSum.sort(([, , a], [, , b]) => a - b)[0].slice(0, 2);
// }

