var isPal = (subString) => {
  // split string in half
  const idx = Math.floor((subString.length - 1) / 2);
  const left = subString.slice(0, idx);
  const right = subString.slice(-idx).split('').reverse().join('');

  // compare left with reversed right
  return left === right;
}

var longestPalindrome = function (string) {
  // traverse string
  const longest = ['x', 1];

  // how do we avoid O(n^2) time complexity??

  // find any palindromes which are length 2 or more
  // if a palindrome is encountered which is longer than the current longest, replace

};


console.log(isPal('badab'));