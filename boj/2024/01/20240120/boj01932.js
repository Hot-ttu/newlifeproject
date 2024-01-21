const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "/Users/juyoung/Desktop/coding/newlifeproject/boj/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();

const triangle = input.map((line) => line.split(" ").map(Number));

const memo = Array.from({ length: n }, () => new Array(n).fill(triangle[0][0]));

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < triangle[i].length; j++) {
    memo[i + 1][j] = Math.max(memo[i + 1][j], memo[i][j] + triangle[i + 1][j]);
    memo[i + 1][j + 1] = Math.max(
      memo[i + 1][j + 1],
      memo[i][j] + triangle[i + 1][j + 1]
    );
  }
}

console.log(Math.max(...memo[n - 1]));
