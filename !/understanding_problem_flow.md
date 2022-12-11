# p
--------------------------------------------------------------------------------------------------------------------------------

  - establish the meaning of any terms or problem-specific concepts
  - translate words and phrases into explicit requirements to establish their meaning for the problem

  ## input(s): argument (...count...type...length)


    1. is the argument count guaranteed?
      - how do I handle the wrong number of args? (ommitted/excess)
    2. are the argument(s) data types guaranteed?
      - if not, how should the wrong types be handled?
    3. if all arguments are the 'right' type, what about subtypes? (e.g. for Number: `NaN`, `+/-Infinity`, `Float`, Non-base 10 nums, leading 0: octal unless next num is 8 or 9)
    4. if an argument is a collection...
      - will all elements be the 'same' type?

  ## output:

  ## type-specific considerations:

  ### STRINGS:
  - does case matter for this problem?
  - how should I handle "empty" strings? (`""` vs. `" "`)
  - is there a min/max length required for a string to be considered valid?
  - how should strings w/ (leading || trailing || intermittent) whitespaces be handled?
  - will "words" with (leading || trailing || intermittent) non-alphanumeric chrs break my solution?
  - what constitutes a WORD for this problem?

  ### NUMBERS:
  - do we need to consider number subtypes? (e.g. ints, floats, NaN, specials, bigInts, non-base 10 nums, ...)
  - +/- numbers, especially when dealing with indices, `slice(negNum)` vs `arr[negNum]`)
  - do we need to consider zeros in this problem?
  - if converting Numbers and Strings, are we concerned with mis-converting octal numbers?

  ### ARRAYS:
  - are all elements of the 'correct' type?
     - will subtypes break our solution?
  - "empty" arrays (empty, sparse, or having non-integer-indexed properties)
  - non-empty arrays with non-integer-indexed properties (e.g.: `['a', 'b', '1.5': 'c']`)

  - does order matter?  would sorting the input array help solve the problem?
  - will each element in the array be unique or should we expect duplicates?
  - is there a required min/max length for the input array to be valid?

  ### OBJECTS:
  - are the objects the same? (what does sameness mean in this context?)



  ### BOOLEANS:
  - true vs truthy
  - "false": `[false, null, undefined, NaN, 0, -0, '' ]`

  ### null/undefined:
  - making up elements in a sparse array
  - both are falsy

# e
# d
# a

