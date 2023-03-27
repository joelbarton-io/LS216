function palindrome(word) {
  let a = 0;
  let b = word.length - 1;

  while (a < b) {
    if (word[a] !== word[b]) return false;
    a++;
    b--;
  }

  return true;
}