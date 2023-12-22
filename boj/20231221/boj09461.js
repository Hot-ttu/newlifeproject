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

const T = +input.shift();

const result = [];
for (let testCase = 0; testCase < T; testCase++) {
  const N = +input.shift();

  const memo = new Array(N + 1).fill(1);

  for (let i = 4; i < N + 1; i++) {
    memo[i] = memo[i - 3] + memo[i - 2];
  }

  result.push(memo[N]);
}

console.log(result.join("\n"));
