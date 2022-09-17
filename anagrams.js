/*

*/
function anagram(target, list) {
  const sortedTarget = target.split('').sort().join('');
  return list.filter((cand) => isAnagram(cand, sortedTarget));
}

function isAnagram(word, target) {
  return word.split('').sort().join('') === target;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]