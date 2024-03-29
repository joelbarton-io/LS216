function sortSequence(sequence) {
  const main = [];
  let temp = [];

  sequence.forEach(num => {
    if (num !== 0) {
      temp.push(num);
    } else {
      main.push(temp);
      temp = [];
      main.push(num);
    }
  });

  const subArraysAndZeros = main.filter(el => (typeof el === 'number' || el.length > 0));
  const sortedSubArraysAndZeros = subArraysAndZeros.map(el => {
    if (!Array.isArray(el)) {
      return el;
    } else {
      return el.sort((a, b) => a - b);
    }
  });
  const justArrays = sortedSubArraysAndZeros.filter(el => Array.isArray(el));
  const sortedBySum = justArrays.sort((a, b) => a.reduce((a, c) => a + c) - b.reduce((a, c) => a + c)).reverse();

  const result = [];

  sortedSubArraysAndZeros.forEach(el => {
    if (Array.isArray(el)) {
      result.push(...sortedBySum.pop());
    } else {
      result.push(el);
    }
  });
  return result;
}


// push vs concat with arrays?
const sequence = [30, 8, 38, 227, 0, 30, 19, 25, 50, 27, 152, 0, 32, 8, 23, 4, 7, 48, 3, 19, 25, 134, 0, 17, 25, 1, 35, 40, 5, 1, 36, 3, 140, 0, 3, 29, 23, 14, 15, 36, 36, 30, 28, 89, 0, 15, 32, 33, 10, 6, 50, 34, 32, 40, 51, 0, 11, 38, 4, 29, 6, 30, 38, 44, 103, 0, 38, 36, 39, 39, 23, 46, 20, 42, 20, 0, 44, 22, 44, 1, 17, 14, 35, 126, 0, 41, 4, 49, 42, 43, 33, 19, 15, 33, 24, 0, 26, 11, 45, 221, 0, 30, 41, 4, 228, 0, 45, 26, 25, 35, 29, 13, 1, 18, 5, 2, 104, 0, 45, 18, 26, 12, 12, 190, 0, 3, 41, 9, 14, 236, 0, 16, 14, 18, 20, 235, 0];
console.log(sortSequence(sequence))

//ex [8, 30, 38, 227, 0, 19, 25, 27, 30, 50, 152, 0, 3, 4, 7, 8, 19, 23, 25, 32, 48, 134, 0, 1, 1, 3, 5, 17, 25, 35, 36, 40, 140, 0, 3, 14, 15, 23, 28, 29, 30, 36, 36, 89, 0, 6, 10, 15, 32, 32, 33, 34, 40, 50, 51, 0, 4, 6, 11, 29, 30, 38, 38, 44, 103, 0, 20, 20, 23, 36, 38, 39, 39, 42, 46, 0, 1, 14, 17, 22, 35, 44, 44, 126, 0, 4, 15, 19, 24, 33, 33, 41, 42, 43, 49, 0, 11, 26, 45, 221, 0, 4, 30, 41, 228, 0, 1, 2, 5, 13, 18, 25, 26, 29, 35, 45, 104, 0, 12, 12, 18, 26, 45, 190, 0, 3, 9, 14, 41, 236, 0, 14, 16, 18, 20, 235, 0],
//ac [1, 14, 17, 22, 35, 44, 44, 126, 0, 8, 30, 38, 227, 0, 3, 4, 7, 8, 19, 23, 25, 32, 48, 134, 0, 1, 1, 3, 5, 17, 25, 35, 36, 40, 140, 0, 3, 14, 15, 23, 28, 29, 30, 36, 36, 89, 0, 6, 10, 15, 32, 32, 33, 34, 40, 50, 51, 0, 4, 6, 11, 29, 30, 38, 38, 44, 103, 0, 20, 20, 23, 36, 38, 39, 39, 42, 46, 0, 19, 25, 27, 30, 50, 152, 0, 4, 15, 19, 24, 33, 33, 41, 42, 43, 49, 0, 11, 26, 45, 221, 0, 4, 30, 41, 228, 0, 1, 2, 5, 13, 18, 25, 26, 29, 35, 45, 104, 0, 12, 12, 18, 26, 45, 190, 0, 3, 9, 14, 41, 236, 0, 14, 16, 18, 20, 235, 0]