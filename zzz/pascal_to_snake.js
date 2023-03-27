/* Complete the function/method so that it takes a PascalCase string and returns the
string in snake_case notation. Lowercase characters can be numbers. If the method
gets a number as input, it should return a string.
 */

/* Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
TST               -->  "t_s_t" ??
"Movies"          -->  "movies"
"movies"          -->  "movies"
*/

function toUnderscore(pascal) {
  if (typeof pascal === 'number') return pascal.toString();
  let words = pascal.match(/[A-Z][a-z0-9]*/g);
  if (!words) return pascal;
  return words.map(w => w.toLowerCase()).join('_');
}

console.log(
  toUnderscore('TestController'),
  toUnderscore('MoviesAndBooks'),
  toUnderscore('App7Test'),
  toUnderscore(1),
  toUnderscore('TST'),
  toUnderscore('Movies'),
  toUnderscore('movies')
);
