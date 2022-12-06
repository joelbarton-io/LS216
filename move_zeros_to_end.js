function moveZeros(input) {
  /*
  ## PROBLEM:
  // zeros : 2
  // [false,1,0,1,2,0,1,3,"a"] // slice
  //                 ^
  // [false,1,1,2,1,3,'a',] // concat zeros 0

  // 8 - spliceCount = 6
  // [false,1,1,2,1,3,"a",0,0] // splice(2, 1)
  //                   ^


  ## RULES:
    - leave all the other non-zero elements where they are
    - all while moving the zeros to the end of the array

  ## EXAMPLES/EDGE CASES:

  ## INPUT:
    - array ([], sparse, normal populated)
    - elements can be any type (other than Number)

  ## INTERMEDIATE:
  ## OUTPUT:
    - mutate input array? AVOID mutation
    - return a new array, without mutating input?

  ## SUMMARY:
   - transform the input array of elements into an array of elements where all the
     zeros have been moved to the end of the array

  ## STEPS: [false,1,0,1,2,0,1,3,"a"]
                           ^
  GUARD for empty arrays []
  DECLARE `res` empty array [false,1,1,2,1,3,"a",0,0]
  DECLARE `zeros`: 0

  TRAVERSE input array
    for each element: check if it is zero
    if 0:
      increment `zeros`
    if NOT 0:
      push `currEl` into `res`

    while `zeros` is > 0:
      push 0 into `res`
      decrement `zeros` by 1

    return `res`
  */
}