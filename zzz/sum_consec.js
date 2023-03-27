function sumConsecutives(input) {
  if (input.length < 2) return input;
  let ar = [];
  let li = 0;
  let ri = 1;

  let temp;

  while (ri <= input.length) {
    let left = input[li];
    let right = input[ri];

    if (temp == undefined) {
      temp = left;
    }

    if (left == right) {
      temp += right;
    }

    if (temp != undefined && left != right) {
      ar.push(temp);
      temp = undefined;
    }

    li++;
    ri++;
  }
  return ar;
  /*
  if length is < 2, return s

  three pointers, one array
  arr = []     [1, 12, 0, 4, 6]
  temp = left; 6

  while right < s.length
    if temp is undefined
      temp = left;

    if left == right
      temp += right

    if temp is not undefined and left != right
      push temp into array
      set temp to undefined

    increment left and right

  [1,4,4,4,0,4,3,3,1]
                 ^-^
  */
}

console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]))

