const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "/Users/juyoung/Desktop/coding/newlifeproject/boj/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input[0];

const stairs = input.slice(1);

const memo = [0, stairs[0], stairs[0] + stairs[1]];
for (let i = 3; i < N + 1; i++) {
  memo[i] = Math.max(memo[i - 3] + stairs[i - 2] + stairs[i - 1], memo[i - 2] + stairs[i - 1]);
}

console.log(memo[N]);
