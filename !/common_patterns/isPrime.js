const isPrime = num => {
  const limit = Math.sqrt(num);

  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
}


console.log(isPrime(11))