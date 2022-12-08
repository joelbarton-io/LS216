function rot13(input) {
  if (input.length === 0) return input;
  const asArr = input.split('');

  for (let i = 0; i < asArr.length; i++) {
    if (asArr[i].match(/[a-z]/i)) { // if alphabetical chr
      asArr[i] = rotate(asArr[i]);
    }

  }

  return asArr.join('');
}

function rotate(c) {
  const UPPER_CASE_LIMIT = 90;
  const LOWER_CASE_LIMIT = 122;
  const ALPHA_COUNT = 26;

  let chrCode;

  if (c === c.toUpperCase()) {
    chrCode = c.charCodeAt(0) + (ALPHA_COUNT / 2);
    if (chrCode > UPPER_CASE_LIMIT) chrCode -= ALPHA_COUNT;
  } else if (c === c.toLowerCase()) {
    chrCode = c.charCodeAt(0) + (ALPHA_COUNT / 2);
    if (chrCode > LOWER_CASE_LIMIT) chrCode -= ALPHA_COUNT;
  }

  return String.fromCharCode(chrCode);


  /*
  if uppercase:
    range of chrcodes is  65...90 (inclusive)
    get chr code of c and add 13 to it
    if this value is > range limit, subtract 26

  if lowercase:
    range of chrcodes i is 97...122 (inclusive)
    get chr code of c and add 13 to it
    if this value is > range limit, subtract 26

  get string from calculated chr code and return this string chr
  */
}