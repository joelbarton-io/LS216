// Write a function that returns true if a string consists of ascending consecutive numbers.

// Examples
// ascending("232425") ➞ true // 3 examples of ascending

// // Consecutive numbers 23, 24, 25

// ascending("2324256") ➞ false
// // No matter how this string is divided, the numbers are not consecutive.

// ascending("444445") ➞ true
// // Consecutive numbers 444 and 445.

// Notes
// A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.

/* questioning (interrogate the problem & interviewer; establish the rules)
---------------------------------------------------------------

input:
output:

RULES:
  - input string MUST have at minimum 2 'numbers'
  - 'number strings' will each be the same length
  - if input string of an odd length, we are using single 'number strings'

center case:
edge case:
---------------------------------------------------------------
*/
/* outlining (validate assumptions)
---------------------------------------------------------------

rephrase: ..."
subproblems:
  - dynamically calculate the possible lengths to split the input string into
  - generating the various length groups
    - 1, 2, ...
  - IF ANY of the length groups are all ascending -> true
  - IF NONE -> false
  "...

roadmap: STRING ... BOOLEAN

---------------------------------------------------------------
*/
/* steps (establishing MM & flow of data from input to output)
---------------------------------------------------------------

mental model:
  '232425' (EVEN string length)
          -> 2, 3, 2, 4, 2, 5
          -> 23, 24, 25
          -> 232, 425
  '2324256' (ODD string length)
          -> 2, 3, 2, 4, 2, 5, 6 (IF THIS split condition doesn't lead to passing conditions, then we know it is false)



    '2324'
        -> number of subarrays == input.length / 2
    = 2
    [
    -> 2, 3, 2, 4
    -> 23, 24
    ]

abstract algo :


loop end condition: upto not including the string.length / 2 (if string.length is odd; then we need to subtract 1)




FIGURE OUT IF EVEN OR ODD LENGTH for input string



revisit 'RULES' & add more test cases (as needed)

---------------------------------------------------------------
*/
/* dry run for algo; (rubber duck phase)
---------------------------------------------------------------

step through algo with examples from center and and edge cases

implement with code

---------------------------------------------------------------
*/

console.log(ascending("232425")) // ➞ true // 3 examples of ascending
console.log(ascending("2324256")) //➞ false
console.log(ascending("444445")) //
console.log(ascending("123")) // true
console.log(ascending("12")) // true
console.log(ascending("32")) //
console.log(ascending("100101102")) // true -> 9 - 1 / 2 -> 4

console.log(ascending("")) // ERROR




// console.log(ascending('99100')) // true bc 99 ... 100


/*
'11' -> 1
'123' -> 1
'1234' -> 2 (1, 2, 3, 4) (12, 34)
'12345' -> 1 (1, 2..)
'123456' -> 3
'1234567' -> 1
'12345678' -> 4
'123456789' -> 2
'1234567890' -> 3
*/
