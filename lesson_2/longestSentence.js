let longText = 'To be or not to be? The brown fox is superlative!'

/*
a sentence ends with either a . || ! || ?
a sentence begins with a word character: \w
*/
function longestSentence(text) {
  const processResults = (sentences) => {
    const longestSentence = sentences.sort((a, b) => b.length - a.length)[0];
    const sentenceLength = longestSentence.match(/[a-z-](\b|\s)/g).length;
    console.log(longestSentence + '\n\nThe longest sentence has ' + String(sentenceLength) + ' words.');
  };

  const sentenceEnder = (letter) => letter.match(/[?.!]+/);
  const sentences = [];
  let sentence = '';

  for (let index = 0; index < text.length; index += 1) {
    let character = text[index];

    if (sentenceEnder(character)) {
      sentence += character;
      sentences.push(sentence.trim());
      sentence = '';
      continue;
    }

    sentence += character;
  }

  console.log(sentences)
  processResults(sentences)
}

longestSentence(longText);

// console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.


// Assuming the last sentence is removed:

// longestSentence(longText);

// console output
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
// The longest sentence has 30 words.
