const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const primes = new Array(246913).fill(false);
primes[1] = true;

const isPrime = (num) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

primes.forEach((_, idx) => {
  primes[idx] = isPrime(idx) ? true : false;
});

const result = [];
input.forEach((num) => {
  num = +num;
  if (num === 0) {
    return;
  }
  let cnt = 0;
  for (let i = num + 1; i <= num * 2; i++) {
    if (primes[i]) {
      cnt++;
    }
  }
  result.push(cnt);
});

console.log(result.join("\n"));
