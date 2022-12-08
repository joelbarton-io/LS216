
function incrementString (string) {
  let digts = string.match(/[\d]*$/g);
  if (digts === null) return string.concat('1');

  let chars = makeChars(string);
  let digtsAsString = String(Number(digts.join('')) + 1);

  let nums = formatDigtsAsString(digts, digtsAsString);

  return chars + nums
}
function formatDigtsAsString(digts, digtsAsString) {
  if (digts[0].length > digtsAsString.length) {
    let zerosToAdd = digts[0].length - digtsAsString.length;

    while (zerosToAdd > 0) {
      digtsAsString = '0' + digtsAsString;
      zerosToAdd--;
    }
  }
  return digtsAsString;
}
function makeChars(string) {
  let countOfNumsAtEnd = 0

  for (let i = string.length - 1; i >= 0; i--) {
    let chr = string[i];
    if (chr.match(/\D/)) break;
    if (chr.match(/\d/)) countOfNumsAtEnd++;
  }

  return string.slice(0, string.length - countOfNumsAtEnd);
}


console.log(incrementString("fo99obar99"))