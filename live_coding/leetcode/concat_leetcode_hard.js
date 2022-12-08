// https://leetcode.com/problems/substring-with-concatenation-of-all-words/

const findSubstring = (s, words) => {
  const START_INDICES = [];
  const WORD_LENG = words[0].length;
  const WORDS_INITIAL = words.join('');
  const INIT_LENG = WORDS_INITIAL.length;

  let wordsCurrent = words.join('');
  let start = 0;
  let end = WORD_LENG;
  let startIdx;

  while (end <= s.length) {
    let curr = s.slice(start, end);
    if (wordsCurrent.length === INIT_LENG) startIdx = start;

    if (wordsCurrent.includes(curr)) {
      wordsCurrent = wordsCurrent.replace(curr, '');
      start += WORD_LENG;
      end += WORD_LENG;
    } else { // don't want to increment start and end
      wordsCurrent = WORDS_INITIAL;
    }

    if (wordsCurrent === '') {
      wordsCurrent = WORDS_INITIAL;
      START_INDICES.push(startIdx);

      if (end === s.length) break; // if end === INIT LENG - 1: we are done!

      if (end < s.length) { // backtrack
        start = startIdx + WORD_LENG;
        end = start + WORD_LENG;
      }
    }

  }

  return START_INDICES;
}
s = "barfoothefoobarman";
words = ["foo", "bar"];

s2 = "barfoofoobarthefoobarman";
words2 = ["bar", "foo", "the"];

console.log(findSubstring(s2, words2));

//,