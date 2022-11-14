# p
  - establish the meaning of any terms or problem-specific concepts
  - translate words and phrases into explicit requirements to establish their meaning for the problem


  - input(s):
    1. is the argument count guaranteed?
      - if not, how do I handle the wrong number of args (+/- the expected)
    2. is the data type guaranteed?
      - if not, how should `X` type(s) be handled?
    3. if collection; will all elems be the same type?
      - if all 'right' type, what about subtypes? (e.g. for Number: `NaN`, `+/-Infinity`, `Float`, Non-base 10 nums, leading 0: octal unless next num is 8 or 9)
    4. 

  ## considerations for:

  ### STRINGS:
  - does case matter for this problem?
  - how should I handle "empty" strings? (`""` vs `" "`)
  - strings w/ (leading || trailing || intermittent) whitespaces
  - "words" with leading/trailing non-alphanumeric or non-alphabetical chrs
  - what constitutes a WORD for this problem?
  - is there a min/max length required for a string element to be considered?

  ### NUMBERS:
  - subtypes: (ints, floats, specials, bigInts, non-base 10, etc.)
  - +/- signed numbers (especially when dealing with indices, `slice(negNum)` vs `arr[negNum]`
  - special numbers (`NaN -Infinity`)

  ### ARRAYS:
  - "empty" arrays (empty, sparse, has non-indexed object properties)
  - non-empty arrays with non-indexed properties (e.g.: `['a', 'b', '1.5': 'c'])
  - are all elements of the 'correct' type?

  ### OBJECTS:

  ### BOOLEANS:
  - true vs truthy
  - "false": `[false, null, undefined, NaN, 0, -0, '' ]`

  ### null/undefined:
  - making up elements in a sparse array
  - both are falsy
# e
# d
# a

