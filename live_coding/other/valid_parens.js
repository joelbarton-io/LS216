function validParentheses(parens) {
  if (parens.length === 0) return true;
  if (parens.length === 1) return false;

  /*
  left parens count : 0

  increment parensCount by 1 for every left parens encountered

  decrement parensCount by 1 for every right parens encountered

  if parensCount ever drops below 0, return false

  otherwise, return true
  */

  let leftC  = 0;
  let rightC = 0;

  for (let i = 0; i < parens.length; i++) {
    parens[i] === '(' ? leftC++ : rightC++;
    if (rightC > leftC) return false;
  }
  return rightC === leftC
}