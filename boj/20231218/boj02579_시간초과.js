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

maxScore = 0;

const dfs = (stairs, stair, count, score) => {
  score += stairs[stair - 1];

  if (stair === N) {
    maxScore = Math.max(score, maxScore);
    return;
  }

  if (count < 1) {
    dfs(stairs, stair + 1, count + 1, score);
    if (stair + 2 <= N) {
      dfs(stairs, stair + 2, 0, score);
    }
  } else {
    if (stair + 2 <= N) {
      dfs(stairs, stair + 2, 0, score);
    }
  }
};

dfs(stairs, 1, 0, 0);

console.log(maxScore);
//  10, 20, 15, 25, 10, 20
