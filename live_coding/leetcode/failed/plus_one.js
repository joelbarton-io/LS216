numbers = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

var plusOne = function(digits) {
  let i = digits.length

  do {
    i--;
    numbers[i] = numbers[i] + 1;
  } while (numbers[i] > 9)

  return digits;
};

console.log(plusOne(numbers));