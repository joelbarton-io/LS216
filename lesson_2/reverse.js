function reverse(string) {
  let result = '';
  for (let index = 0; index < string.length; index += 1) {
    result = string[index] + result;
  }
  return result;
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    //) returns "xof nworb kciuq ehT"