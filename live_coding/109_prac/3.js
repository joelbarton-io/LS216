/* # Write a method named to_weird_case that accepts a string, and
# returns the same sequence of characters with every 2nd character
# in every third word converted to uppercase. Other characters
# should remain the same. */

// 'Other characters should remain the same.')) // 'Other characters sHould remain the sAme.'
// 'Other characters s1hould remain the same.')) // 'Other characters s1hould remain the sAme.'
// 'aaa bbb c2')) // 'aaa bbb c2'
// 'and returns the same sequence of characters with every 2nd character in every third word converted to uppercase.')) // 'and returns tHe same sequence oF characters with eVery 2nd character iN every third wOrd converted to uPpercase.'
// 'Write a method named to_weird_case that accepts a string,')) //  Write a mEthod named to_weird_case tHat accepts a sTring,
// 'Write a meth333od named to_weird_c%se that accepts a string,')) //  Write a mEthod named to_weird_case tHat accepts a sTring,
// '    Wri-te a     method named to_weird_case that$  accepts a _string,    ')) //  Write a      mEthod named to_weird_case tHat accepts a sTring,
// '')) // ''
// '77777777,,,,,,,,,,%%%%% ..... @@@@a')) // '77777777,,,,,,,,,,%%%%% ..... @@@@a'

/*
?:

-> i: string of 'words' or empty string

<- o:



expl/impl rules (validate with test-cases):
- WORD : group of chrs separated by any number of spaces or the end/beginning of the input string itself
  - can also contain non alphabetical chrs (sym nums)
- capitalize the 2nd CHR (could potentially be a symbol) in every 3rd WORD
- if the chrToBeChanged is non-alphabetical, simply leave the WORD unchanged
- don't have to preserve leading/trailing WS or excess whitespace between WORDS

sub-problems:

GUARD against invalid input types or an empty string

SPLIT valid_sentence into array of WORDS and perform modification on the appropriate element in the array and the appropriate index [1]

steps:

GUARD against invalid input types
  IF VALID type, trim input string and make sure it isn't an empty string

SPLIT valid_sentence into array of WORDS: (input.match(/\S+/g)); assign to a variable `WORDS`
DECLARE result array

LOOP through WORDS by increments of 1
  IF the idx + 1 is divisible by 3 && curr WORD length is > 1:
    making 2nd chr uppercase and push this modified word into result array
  ELSE:
    push word into result array

return result array joined by single whitespace
*/

function p(word) {
  console.log(word);
}

function trimLeadingTrailingWS(str) {
  return str.trim();
}

function modify(word) {
  const divByTwo = (idx) => idx % 2 === 0;
  const chrs = word.split('');
  return chrs.map((chr, idx) => {
    if (divByTwo(idx + 1)) {
      return chr.toUpperCase();
    } else {
      return chr;
    }
  }).join('');
}

function wierdCase(input) {
  if (typeof input !== 'string') return null;
  const trimmed = trimLeadingTrailingWS(input);
  if (trimmed.length === 0) return null;
  const result = [];
  const words = trimmed.match(/\S+/g);
  const divByThree = (idx) => idx % 3 === 0;

  words.forEach((word, idx) => {
    if (divByThree(idx + 1) && word.length > 1) {
      const modWord = modify(word);
      result.push(modWord);
    } else {
      result.push(word);
    }
  });

  return result.join(' ');
}

p(wierdCase({})) // ERR
p(wierdCase('')) // ''
p(wierdCase('           ')) // ''
p(wierdCase('    Wri-te a     method named to_weird_case that$  accepts a _string,    ')) //  Write a mEthod named to_weird_case tHat accepts a sTring,
p(wierdCase('77777777,,,,,,,,,,%%%%% .....@@@@a')) // '77777777,,,,,,,,,,%%%%% ..... @@@@a'
p(wierdCase('Other characters should remain the same.')) // 'Other characters sHould remain the sAme.'
p(wierdCase('Other characters s1hould remain the same.')) // 'Other characters s1hould remain the sAme.'
p(wierdCase('aaa bbb c2')) // 'aaa bbb c2'
p(wierdCase('and returns the same sequence of characters with every 2nd character in every third word converted to uppercase.')) // 'and returns tHe same sequence oF characters with eVery 2nd character iN every third wOrd converted to uPpercase.'
p(wierdCase('Write a method named to_weird_case that accepts a string,')) //  Write a mEthod named to_weird_case tHat accepts a sTring,
p(wierdCase('Write a meth333od named to_weird_c%se that accepts a string,')) //  Write a mEthod named to_weird_case tHat accepts a sTring,
p(wierdCase('Lorem Ipsum is simply dummy text of the printing')== 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG')
p(wierdCase('It is a long established fact that a reader will be distracted')== 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD')
p(wierdCase('aaA bB c')== 'aaA bB c')
p(wierdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious')== 'Miss Mary POpPiNs word is sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS')

// ~> 30:00 (went slightly over on this one and didn't parse the problem description adequately
