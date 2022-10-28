/*
Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags.
If multiple words tie for the same length, retrieve the word that occurs first.

?:
1) What if we have a tie?  Which 'word' should be included?
2) input type is guaranteed?
3)


in: string
out: array filled with strings

IMOW: str -> arr of 'words' -> new arr with modified words with '#' prefixed

rules:
- if input string is less than 3 words, just return list of words in descending order by length
- words lengths don't include punctuation (non alphabetical chrs)
- output array words are all lowercased

mental model:
Traverse input string as array of words (split by whitespace) (match or split())


abstract:

GUARD :
  - invalid inputs

TRIM any leading or trailing whitespaces from input string

SPLIT input string into arr_of_els

transform arr_of_els to an array of arrays with [word, word's count]
  -> helper fn for word count

order by word_count value descending
slice from 0..3

with this new 3 element array, produce result


--- helper:

take a word and calculate the number of alphabetical chrs present

code:
*/
function letterCount(word) { // return an int
  let count = 0;
  word.split('').forEach(chr => {
    if (chr.match(/[a-z]+/i)) count++;
  })
  return count;
}

function getCount(clean) {
  return clean.reduce((acc, curr) => {
    let count = letterCount(curr);
    if (acc[count]) {
      acc[count].push(curr);
    } else {
      acc[count] = [curr];
    }
    return acc;
  }, {});
}

function makeClean(arrOfWords) {
  return arrOfWords.map(word => {

    if (word[0].match(/[,!_.]/)) word = word.slice(1);
    if (word[word.length - 1].match(/[,!_.]/)) word = word.slice(0, word.length - 1);

    return word.toLowerCase();
  });
}

function makeSorted(counts) {
  return Object.entries(counts)
    .sort(([a,], [b,]) => Number(b) - Number(a))
    .map(arr => arr[1]);
}

function getHashTags(input) {
  if (typeof input !== 'string') return 'invalid input';
  const trimmed = input.trim();
  const arrOfWords = trimmed.split(/\s+/);

  const cleaned = makeClean(arrOfWords);
  const counts = getCount(cleaned);
  const sorted = makeSorted(counts);

  return sorted.flat().slice(0, 3).map(word => '#' + word);
}

console.log(getHashTags("How the Avocado    Became the Fruit of the Global Trade")); // ["#avocado", "#became", "#global"]
console.table(getHashTags("        How the Avocado Became the Fruit of the Global Trade   ")); // ["#avocado", "#became", "#global"]
console.table(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")); // ["#christmas", "#probably", "#will"]
console.table(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")); // ["#surprise", "#parents", "#fruit"]
console.table(getHashTags(",Hey Parents, Surprise, Fruit Juice Is Not Fruit")); // ["#surprise", "#parents", "#fruit"]

console.table(getHashTags("Visualizing Science")); // ["#visualizing", "#science"]
console.table(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")); // ["#surprise", "#parents", "#fruit"]
console.table(getHashTags("Hey'yya Parents, Surpris_e, Fruit Juice Is Not Fruit")); // ["#surprise", "#parents", "#heyyya"]


console.log(getHashTags([])); // ERROR MESSAGE
console.log(getHashTags({})); // ERROR MESSAGE
console.log(getHashTags()); // ERROR MESSAGE
console.log(getHashTags([[], [], []])); // ERROR MESSAGE
console.log(getHashTags(123456)); // ERROR MESSAGE
