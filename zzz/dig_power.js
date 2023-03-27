function digPow(n, p) {
  const digits = String(n).split('').map(Number);

  const prod = digits.map((int, i) =>  int ** (p + i)).reduce((a, c) => a + c);

  const rem = prod / n;

  return Math.floor(rem) === rem ? rem : -1;
}
// i = 0 (index in string n)
// n[i]^(p + i) + n[i]^(p + i) + n[i]^(p + i) = n * k (k is the value we want to find)


// dealing with rems since the result must be an integer
// if result is not an integer, we should return -1