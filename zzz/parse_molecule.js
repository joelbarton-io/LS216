const clean = formula => {
  formula = formula.replaceAll('[', '(');
  formula = formula.replaceAll('{', '(');
  formula = formula.replaceAll(']', ')');
  formula = formula.replaceAll('}', ')');
  return formula;
}
const parse = grouping => {
  // if (grouping === '') return '';
  let str = '';

  let splitUp = grouping.match(/([A-Z][a-z]*)|\d+/g);

  while (splitUp.length) {
    if (splitUp.length > 1) {
      if (splitUp[1].match(/\d/)) { // next is number
        let count = Number(splitUp[1]);
        let toAdd = new Array(count)
        str = str.concat(toAdd.fill(splitUp[0]).join(''));
        splitUp = splitUp.slice(2);
      } else { // next is string
        str = str.concat(splitUp[0]);
        splitUp = splitUp.slice(1);
      }
    } else {
      str += splitUp.pop();
    }
  }

  return str;
}

function parseMolecule(formula) {
  let result = clean(formula);

  while (result.match(/\d/)) { // loop

    if (result.indexOf(')') === -1) { // no more parens, only letters and numbers
      result = parse(result);
      break;
    }

    let idxLeftInnerParens = result.lastIndexOf('(');
    let idxRightInnerParens = result.indexOf(')');
    let grouping = result.slice(idxLeftInnerParens + 1, idxRightInnerParens);

    let left = result.slice(0, idxLeftInnerParens);
    let right = result.slice(idxRightInnerParens + 1);
    let newGrouping = parse(grouping);

    if (right.match(/^\d+/g)) {
      let count = right.match(/^\d+/g)[0];
      newGrouping = new Array(Number(count)).fill(newGrouping).join('');
      right = right.slice(count.length);

    }
    result = left.concat(newGrouping, right);
  }

  return tally(result);
}

const tally = formula => {
  return formula.match(/([A-Z][a-z]*)|\d+/g).reduce((acc, curr) => {
    curr in acc ? acc[curr]++ : acc[curr] = 1;
    return acc;
  }, {})
}

  // de-nest formula:
  /*

  find innermost nest
  given that grouping, check:
    - are there any numbers in this string?
      - if there are, expand string and remove numbers

      - if not:
        - add these to the result string
        - continue outward
      - is there a number immediately after ')' ?
        - if yes:
          - multiply the string the appropriate number of times, this is the new result
        - if not:
          - simply append curr string to result
          - and continue

    - do we care about brackets in the result string???

  move left and right

  */

  // traverse de-nested formula and tally element counts


// console.log(parseMolecule("H2O"));
// console.log(parseMolecule("Mg(OH)2"));
// console.log(parseMolecule("K4[ON(SO3)2]2"));
console.log(parseMolecule("(C5H5)Fe(CO)2CH3"));

  //        "K4[ON(SO3)2]2"
  //               S000
  //            S000 S000
  //          ON SOOO SOOO
  //     ON SOOO SOOO ON SOOO SOOO
  //   KKKK ON SOOO SOOO ON SOOO SOOO

  // an element can be a single uppercase letter ('K') or a pairing of uppercase and lowercase letters
  // numbers can be of length 1 or more (it's possible that they are much longer than 1)

