# p


## TERMS:
- FIRST establish the meaning of any terms or problem-specific concept(s)
- translate words and phrases into explicit requirements to establish their meaning for the problem

## input(s): argument (...count...type...length)

    1. is the argument count guaranteed?
      - how do I handle the wrong number of args? (ommitted/excess)
    2. are the argument(s) data types guaranteed?
      - if not, how should the wrong types be handled?
    3. if all arguments are the 'right' type, what about subtypes?
    4. if an argument is a collection (array or object)
      - will all elements be the 'same' type?

## output:

    1. what are all the possible valid return values?

## type-specific considerations:

### STRINGS:

- does case matter for this problem?
- how should I handle "empty" strings? (`""` vs. `" "`)
- is there a min/max length required for a string to be considered valid?
- how should strings w/ (leading || trailing || intermittent) whitespaces be handled?
- will "words" with (leading || trailing || intermittent) non-alphanumeric chrs break my solution?
- what constitutes a WORD for this problem? (separated by 1+ spaces, end of word?) (`match` vs `split`)

### NUMBERS:

- a `Number` can be: `Integer`, `NaN`, `+/-Infinity`, `Float`, Non-base 10, have a leading 0: octal unless next num is 8 or 9
- do we need to consider number subtypes? (e.g. ints, floats, NaN, specials, bigInts, non-base 10 nums, ...)
- do we need to consider zeros in this problem?
- +/- numbers, especially when dealing with indices, (`arr.slice(negNum)` vs `arr[negNum]`)
- if converting `Numbers` and `Strings`, are we concerned with mis-converting octal numbers?

### ARRAYS:

- _(UNCOMMON)_
  - can we expect all elements to be of the 'correct' type?
  - will any subtypes complicate our envisioned approach?
  - "empty" arrays (empty, sparse, or having non-integer-indexed properties...)
  - non-empty arrays with non-integer-indexed properties (e.g.: `['a', 'b', '1.5': 'c']`)

- _(COMMON)_
  - is there a required min/max length for the input array to be valid?
  - will each element in the array be unique or should we expect/plan for duplicates?
  - would sorting the input array help with solving this problem? (`sort()` vs `sort(cb)`)
  - are we concerned with MUTATION? (`pop(), push(), shift(), unshift(), reverse(), sort(), splice()`)

### OBJECTS:

- are two objects the same? (what does `equality` mean in this context?)
- are we concerned with overwriting a key's value?
- is an object the right choice or should we use an `Array`, `Set`, `Map`, or counter
- are we worried about key's values being "falsy" (`obj.hasOwnProperty(key)` vs. `obj[key]` behave differently)

### BOOLEANS:

- true vs "truthy"
- "falsy": `false, null, undefined, NaN, 0, -0, ''`

### null/undefined:

- `null` intentional absence of value (only occurs based on hard-coded user decisions)
- `undefined` value does not exist (can naturally occur/be produced by code)
- both are falsy
- sparse sections of an array have default value `undefined`; which isn't the same as the value at some index explicitly being `undefined`

# e

# d

# a
