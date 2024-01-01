const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const n = +input;

const memo = new Array(n + 1).fill(Infinity);
memo[0] = 0;
memo[1] = 1;
memo[2] = 2;
memo[3] = 3;

for (let i = 4; i < n + 1; i++) {
  sqrt = Math.floor(Math.sqrt(i));
  for (let j = Math.floor(sqrt / 2); j <= sqrt; j++) {
    if (memo[i - j ** 2] + 1 < 5) {
      memo[i] = Math.min(memo[i], memo[i - j ** 2] + 1);
    }
  }
}

console.log(memo[n]);
