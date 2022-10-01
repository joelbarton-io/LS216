/*
understanding the problem :

i: string of letters
o: array of substrings -> 'substring': subsection of original string ordered sequentially and by length

problem description : produce array of substrings based on input string argument.  substrings are ordered based on their
                      relative position of the leading letter from within the input string.  For each of these leading letters, elements are
                      ordered in final list based on ascending length

const str = 'abcde';

['a', 'ab',
'b', 'b'
..
...
'e']


ds : string -> array of substrings


steps:

validate input; return something if invalid (perhaps an empty array) (ASK ABOUT THIS; DEFAULT TO '[]'?)

create result list
create pointer initialized to 1

traverse input string starting at index 0, moving to the last character of the string
  counter pointer initialzed to current index value + 1
  while inner pointer < input string length
    slice from current element index to nth index until counter is === to length of input string
    push slices into result list
    increment inner counter by 1

  return result list;


test cases:

 
*/

function someFn() {
  return 'hi';
}

function subStrings(strInput) {
  if (typeof strInput !== 'string') {
    return 'invalid input.  Input must be a string';
  }

  if (strInput.length === 0) {
    return [];
  }

  const result = [];
  let secondIndex;
  let firstIndex = 0

  for (; firstIndex < strInput.length; firstIndex += 1) {
    secondIndex = firstIndex + 1;
    while (secondIndex <= strInput.length) {
      let substring = strInput.slice(firstIndex, secondIndex);
      result.push(substring);
      secondIndex += 1;
    }
  }
  return result;
}



// valid inputs:
console.log(subStrings('abcde'));
// console.log(subStrings('')); //-> empty array?
// console.log(subStrings('abcde'));
// console.log(subStrings('abcde\n'));
// console.log(subStrings('ab     cde'));
// console.log(subStrings('______m789756!'))
// console.log(subStrings(`(){}`));
// console.log(subStrings('    abcde'));
// console.log(subStrings(':;xc'));
// // invalid inputs:
// console.log(subStrings([]));
// console.log(subStrings({}));
// console.log(subStrings(31254));
// console.log(subStrings(-Infinity));
// console.log(subStrings(NaN));
// console.log(subStrings(undefined));
// console.log(subStrings(null));
// console.log(subStrings(someFn));
