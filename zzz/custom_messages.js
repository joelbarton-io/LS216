function likes(names) {

  /*
  3 paths:
    1. empty and 1 (likes)

    2. 2 -> 3 elements (like)
    3. 4 + elements (like)
  */

  const count = names.length;
  let text = '';

  if (count < 2) {
    text = count == 0 ? 'no one' : names[0];
    text = text.concat(' likes this');
  } else if (count == 2) {
    text = names.join(' and ').concat(' like this')
  } else if (count == 3) {
    text = names.slice(0, 2).join(', ').concat(' and ', names[2], ' like this')
  } else { // 4 or more
    text = names.slice(0, 2).join(', ').concat(' and ', names.length - 2, ' others', ' like this')
  }

  return text;
}