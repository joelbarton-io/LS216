/*
We can shift a string by shifting each of its letters to its successive letter.

For example, "abc" can be shifted to be "bcd".
We can keep shifting the string to form a sequence.

For example, we can keep shifting "abc" to form the sequence: "abc" -> "bcd" -> ... -> "xyz".
Given an array of strings `strings`, group all strings[i] that belong to the same shifting sequence.
You may return the answer in any order.
*/
  //                                                    +1 seq                + 2 seq


// shifting(['cba', 'dcb', 'zyx', 'fec', 'wus'])) // [['cba', 'dcb', 'zyx'], ['fec', 'wus']] -> INVALID test case bc needs to be successive ascending in order

/*
1) can the letters be uppercase or are they always lowercase?   NO invalid
2) can the 'sequences' descend?   NO, invalid
3) how should we handle elements which have inconsistent successive incrementation?
  - discard these values?

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
'afk' -> seq 5

input : array of strings
  - will the elements in the input always be of length > 1?
  - can be empty or have only one element

Identify rules
  - elements in input array must have length > 1
  - for it to be a sequence, it must have a consistent incrementation value (1, 1) is good but (1, 2) is bad

Data Structure
  - array of strings
  - object `groups`
    {
      1: ['abc', 'bcd', 'xyz'],
      ...
    }
Steps
GUARD against empty input array or array of length 1
FILTER out elements of input array which have a length < 2

CREATE obj called `groups` to store groupings

TRAVERSE input array of seq candidates:
  declare `incVal` = seq[0] and seq[1]

  TRAVERSE characters of seq:
    compare chrCodes for chr1, chr2 to `incVal`
    if all equal, this valid sequence so populate`groups` with `incVal` as key and array containing curr seq
    if not all equal, this is invalid sequence
      so just continue to next element in array

return groups as array of arrays (Object.entries)


*/

function shifting(input) {
  if (input.length < 1) return [];

  const filteredInput = input.filter(candi => candi.length > 1);
  const groups = {};

  filteredInput.forEach(seq => {
    let incVal = seq.charCodeAt(1) - seq.charCodeAt(0);
    let valid = true;

    for (let i = 0; i < seq.length - 1; i++) {
      const leftVal = seq.charCodeAt(i);
      const rightVal = seq.charCodeAt(i + 1);
      const diff = (rightVal - leftVal);

      if (incVal !== diff) {
        valid = false;
        break;
      }
    }

    if (valid) {
      if (groups[incVal]) {
        groups[incVal].push(seq);
      } else {
        groups[incVal] = [seq];
      }
    }
  });

  return Object.entries(groups).map(entry => entry[1]);
}

console.log(shifting(['a', 'b', 'c', 'abc', 'def', 'fg'])) // [['abc', 'def', 'fg']]
// console.log(shifting([])) // []
// console.log(shifting(['abc', 'bcd', 'xyz', 'ceg', 'suw'])) // [['abc', 'bcd', 'xyz'], ['ceg', 'suw']]
// console.log(shifting(['abcd', 'bcd', 'xyz', 'ceg', 'suw'])) // [['abcd', 'bcd', 'xyz'], ['ceg', 'suw']]
// console.log(shifting(['abc', 'bcd', 'xyz', 'cfi'])) // [['abc', 'bcd', 'xyz'], ['cfi']]
// console.log(shifting(['aaa', 'bbb', 'ccc', 'abc'])) // [['abc'], ['aaa', 'bbb', 'ccc']] ZERO seq count vals
// console.log(shifting(['abd', 'bcd', 'xyz', 'cfi'])) // [['bcd', 'xyz'], ['cfi']]  CONSISTENT incr value
// console.log(shifting(['abc'])) // [['abc']]

