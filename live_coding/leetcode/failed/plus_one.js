numbers = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

var plusOne = function(digits) {
  let i = digits.length

  do {
    i--;
    digits[i] = digits[i] + 1;
    if (digits[i] === 10) digits.splice(i, 0, 0)
  } while (digits[i] > 9)

  return digits;
};

console.log(plusOne(numbers));