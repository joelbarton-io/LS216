/*
Given an array of words and a target compound word, your objective is to find the two words which combine
into the target word, returning both words in the order they appear in the array, and their respective
indices in the order they combine to form the target word. Words in the array you are given may repeat,
but there will only be one unique pair that makes the target compound word. If there is no match found, return null/nil/None.

Note: Some arrays will be very long and may include duplicates, so keep an eye on efficiency. (must be oN or better)

based on compound word as string, split into all non-zero lengthed substrings
convert this array into an object with the substrings as keys and some arbitrary (truthy) value

{
  s: true,
  uperbowl: true
  su: true,
  perbowl: true,

}

traverse `words`

if word is present in obj, select it

now we have an array of candidate subwords

based on these words, check if any combine to create target

two pointers (indices left right)

*/
function areCandidates(words, subWords) {
  return Array.from(new Set(words.filter(word => subWords[word])));
}

function makeSubwordsFrom(target) {
  let partitionIdx = 1;
  const subWords = {};

  while (partitionIdx < target.length) {
    const left = target.slice(0, partitionIdx);
    const right = target.slice(partitionIdx);
    subWords[left] = true;
    subWords[right] = true;
    partitionIdx++;
  }

  return subWords;
}

function makeDictionary(words) {
  return words.reduce((dict, word, idx) => {
    if (!(dict.has(word))) dict.set(word, idx);
    return dict;
  }, new Map());
}

function formatResult(candidates, target, map) {
  if (candidates.join('') != target) {
    let left = candidates[0];
    let right = candidates[1];
    candidates[1] = left;
    candidates[0] = right;
  }

  const indices = candidates.reduce((indices, word) => {
    indices.push(map.get(word));
    return indices;
  }, []);

  candidates.push(indices)

  return candidates;
}

function compoundMatch(words, target) {
  const map = makeDictionary(words);
  const subWords = makeSubwordsFrom(target);
  const candidates = areCandidates(words, subWords);
  const result = formatResult(candidates, target, map);
  return result;
}

// console.log(makeDictionary(['super', 'bow', 'bowl', 'tar', 'get', 'book', 'let']))
// console.log(compoundMatch(['super', 'bow', 'bowl', 'tar', 'get', 'book', 'let'], "superbowl"))      //=>   ['super','bowl',   [0,2]]
// console.log(compoundMatch(['bow', 'crystal', 'organic', 'ally', 'rain', 'line'], "crystalline"))   //=>   ['crystal','line', [1,5]]
// console.log(compoundMatch(['bow', 'crystal', 'organic', 'ally', 'rain', 'line'], "rainbow"))       //=>   ['bow','rain',     [4,0]]
// console.log(compoundMatch(['bow', 'crystal', 'organic', 'ally', 'rain', 'line'], "organically"))   //=>   ['organic','ally', [2,3]]
// console.log(compoundMatch(['top', 'line', 'line', 'main', 'tree', 'ally', 'fin', 'line'], "mainline")) //=>   ['main','line',    [3,1]]
// console.log(compoundMatch(['top', 'main', 'tree', 'ally', 'fin', 'line'], "treetop"))              //=>   ['top','tree',     [2,0]]

// areCandidates(['top', 'line', ,'line','main', 'tree', 'ally', 'fin', 'line'], makeSubwordsFrom('mainline'))
/*
Given an array of words and a target compound word, your objective is to find the two words which combine
into the target word, returning both words in the order they appear in the array, and their respective
indices...

// console.log(compoundMatch(['super', 'bow', 'bowl', 'tar', 'get', 'book', 'let'], "superbowl"))      //=>   ['super','bowl',   [0,2]]
// console.log(compoundMatch(['bow', 'crystal', 'organic', 'ally', 'rain', 'line'], "rainbow"))        //=>   ['bow','rain',     [4,0]]
// console.log(compoundMatch(['top', 'main', 'tree', 'ally', 'fin', 'line'], "treetop"))               //=>   ['top','tree',     [2,0]]
*/
