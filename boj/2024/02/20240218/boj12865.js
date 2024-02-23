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

const [N, K] = input.shift().split(" ").map(Number);
const items = input.map((item) => item.split(" ").map(Number));

const memo = Array.from({ length: N + 1 }, () => new Array(K + 1).fill(0));

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < K + 1; j++) {
    if (
      j < items[i - 1][0] ||
      (j % items[i - 1][0] && memo[i][j - items[i - 1][0]] === 0)
    ) {
      memo[i][j] = memo[i - 1][j];
    } else {
      memo[i][j] = Math.max(
        memo[i - 1][j],
        memo[i - 1][j - items[i - 1][0]] + items[i - 1][1]
      );
    }
  }
}

console.log(memo[N][K]);
