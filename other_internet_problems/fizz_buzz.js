function solve(n) {
  let result = []
  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
      continue;
    } else if (i % 3 === 0) {
      result.push('Fizz');
      continue;
    } else if (i % 5 === 0) {
      result.push('Buzz');
      continue;
    } else {
      result.push(String(i));
      continue;
    }
  }
  return result;
}

console.log(solve(20))