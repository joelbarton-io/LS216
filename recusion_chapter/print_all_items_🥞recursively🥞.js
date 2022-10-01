function printAllItems(arr, callStackVisual) {
  arr.forEach((el) => {
    if (typeof el === 'number') { // BASE CASE
      console.log(el);
    } else if (Array.isArray(el)) {
      callStackVisual.unshift('printAllItems(' + JSON.stringify(el) + ')');
      callStackVisual.forEach((frame) => console.log('🥞 - ' + frame));
      return printAllItems(el, callStackVisual); // RECURSIVE CALL
    }
  });

  callStackVisual.shift();
}

let array = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8, [9, 10, 11, [12, 13, 14]]],
  [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32],
  33,
];

const callStack = ['printAllItems(<initialArray>)'];

printAllItems(array, callStack); // INITIAL INVOCATION
