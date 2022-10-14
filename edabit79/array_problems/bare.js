function numberPairs(input) {
  if (typeof input !== 'string' || input.length < 3) return 'invalid input';

  let numChrs = input.split(/[\s]+/).slice(1);
  const dict = {};

  numChrs.forEach(el => {
    dict[el] = dict[el] ? dict[el] + 1 : 1;
  });

  let arrOfSubs = Object.entries(dict);
  let pairs = 0;

  arrOfSubs.forEach(([_, count]) => {
    while (count > 1) {
      pairs += 1;
      count -= 2;
    }
  });

  return pairs;
}
