const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "/Users/juyoung/Desktop/coding/newlifeproject/boj/input.txt"
  )
  .toString()
  .trim();

const N = +input;

memo = [0, 1, 2];

for (let i = 3; i < N + 1; i++) {
  memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
}
// 매 값이 답이므로 매 값이 10007로 나눈 값이 들어가야 한다.

console.log(memo[N]);
