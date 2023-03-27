/*
perm : a section of the larger string that contains the same letters as the shorter string, they can be in the 'wrong' order, still valid

'location' : the first index of the matching permutation? or 'middle' index

traverse LONG with sliding window of length SHORT and check if the substring is a permutation of SHORT
-> how do we do the comparison?  (sort SHORT) and then for each candidate, sort and compare with SHORT
-> hash table with {
  chr: count of that letter,

}

ex:

SHORT : 'abc' (3)
LONG  : 'abcdefgabc' (10)
                ^_^

SORTING approach:
- sort SHORT
- traverse LONG from 0 index -> (LONG length - SHORT length)
- sort subsection and compare and check if it's a match, if it is print index

HASHTABLE approach:

- tally SHORT chrs
- traverse LONG from 0 index -> (LONG length - SHORT length)
- tally subsection chrs in hashtable

- loop over the keys of SHORT hash to check if all match
  - if they do match then print out current index


*/


function sorting(short, long) { // O(N * (N log N)) -> O(N^2)
  const sortedShort = short.split('').sort().join(''); // O(N log N)
  const LENG = short.length;

  for (let i = 0; i < (long.length - LENG + 1); i++) { // O(N)
    const sortedSubstring = long.slice(i, i + LENG).split('').sort().join(''); // o(N log N)
    if (sortedShort === sortedSubstring) console.log(i);
  }
}

function hashTable(short, long) { // O(N^2)
  const LENG = short.length;
  const makeHashTable = (acc, curr) => {
    (curr in acc) ? acc[curr]++ : acc[curr] = 1;
    return acc;
  }

  const SHORT_CHRS = short.split('').reduce(makeHashTable, {}); // O(N) * O(2N) -> O(N^2)

  for (let i = 0; i < (long.length - LENG + 1); i++) { // O(N)
    const LONG_CHRS = long.slice(i, i + LENG).split('').reduce(makeHashTable, {}); // O(N)
    // const LONG = Object.entries(LONG_CHRS).flat().join('');
    // const SHORT = Object.entries(SHORT_CHRS).flat().join('');
    // console.log('L: ', LONG, 'S: ', SHORT);

    if (Object.keys(LONG_CHRS).every(key => key in SHORT_CHRS && LONG_CHRS[key] === SHORT_CHRS[key])) { // O(N)
      console.log(i);
    }
  }
}

function optimizedHashTable(short, long) {
  const makeHashTable = (acc, curr) => {
    (curr in acc) ? acc[curr]++ : acc[curr] = 1;
    return acc;
  }

  const SHORT_CHRS = short.split('').reduce(makeHashTable, {});

  for (let i = 0; i < (long.length - short.length + 1); i++) { // O(N)
    if (!(long[i] in SHORT_CHRS)) {
      console.log('skipped chr: ', long[i], 'at index: ', i,);
      continue;
    }

    const LONG_CHRS = long.slice(i, i + short.length).split('').reduce(makeHashTable, {});

    if (Object.keys(LONG_CHRS).every(key => key in SHORT_CHRS && LONG_CHRS[key] === SHORT_CHRS[key])) { // O(N)
      console.log(i);
    }
  }
}

const short = 'abc';
const long2 = 'abc'
const long = 'zabcdefgabc';


// console.log(optimizedHashTable(short, long));
// console.log(sorting(short, long2));
