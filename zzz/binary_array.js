const binaryArrayToNumber = arr => {
  // reverse input array to make iteration make more sense
  //.      1   2   4   8   16  ...
  // res = 0 + 0 + 0 + 0
  //  1 2 4 8 16  ...
  // [0,1,2,3,4]
  // [1,0,0,0,1]
  //    ^

  let final = 0; // 1

  arr.reverse().forEach((el, idx) => {
    final += (2**idx * el);
  });

  return final;
};

console.log(binaryArrayToNumber([0,0,1,0]));