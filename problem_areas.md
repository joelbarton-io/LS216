## `String` methods:

- `indexOf(str, startingIdx)`, `lastIndexOf()`, `replace()`, `split()`, `slice()`, `substring()`, `toUpperCase()`, `toLowerCase()`, `toString()`, `endsWith()`

## General observations:

- if `match` doesn't come up with a match, it returns `null`, this can be an issue if we are expecting an array value

- `/^\s*$/g` : checks if a string contains only empty spaces

- log out every new change to ensure things are working as expected before you continue

- INTERESTING BEHAVIOUR WITH `myObj.hasOwnProperty(myProp)` vs myObj[myProp] in a conditional statement

- HOW DOES `Object.fromEntries(entries)` work when dealing with a 'sorted' array?

- how to transform an array into a set of subarrays of length `n`... array of `n` subarrays

- knowing 'when to stop' an iteration over some array or string (end conditions)

- what to do if an object property is explicitly `undefined`??? `{a: undefined}`

- checking if a property exists in an object and that properties value is falsy,
- a possible solution would be to convert the object into a list of keys and check if the desired key is present
- like:

``` javascript
obj = { a: 1, b: 2, c: 3, d: 0 };

if (Object.keys().includes('d') {
  console.log('found');
} else {
  console.log('missing');
}
// > 'missing'
```

``` javascript
obj = { a: 1, b: 2, c: 3, d: undefined };

if (obj.hasOwnProperty(d) {
  console.log('found');
} else {
  console.log('missing');
}
// > 'missing'
```


- `sort` MUTATES the array in place; always be careful with `sort`

- regex




- AVOID:
  - using `delete` on array objects as it deletes the element at the specified index but preserves the array's length and leaves an empty slot.  Only use `delete` on NON-iterable objects (just normal objects)

  - using `fill()` with non-primitive data types

  - using `JSON.stringify(obj)` to compare two objects unless you can guarantee the keys were added in the same order for each object

  -