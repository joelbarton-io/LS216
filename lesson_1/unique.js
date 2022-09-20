function isAllUnique(string) {
  const dictionary = {};
  let result = true;

  string.split('').forEach(letter => {
    if (dictionary[letter]) {
      result = false;
    } else {
      dictionary[letter] = true;
    }
  });
  console.log(dictionary);
  return result;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'))  // false
console.log(isAllUnique('123,456,789'))                                 // false
console.log(isAllUnique('The big apple'))                               // false
console.log(isAllUnique('The big apPlE'))                               // false
console.log(isAllUnique('!@#$%^&*()'))                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'))                  // true
