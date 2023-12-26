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

memo = new Array(N + 1).fill(0);

// for (let i = 2; i < N + 1; i++) {
//   if (!(i % 3)) {
//     if (!(i % 2)) {
//       memo[i] = Math.min(memo[Math.floor(i / 3)], memo[Math.floor(i / 2)], memo[i - 1]) + 1;
//     } else {
//       memo[i] = Math.min(memo[Math.floor(i / 3)], memo[i - 1]) + 1;
//     }
//   } else if (!(i % 2)) {
//     memo[i] = Math.min(memo[Math.floor(i / 2)], memo[i - 1]) + 1;
//   } else {
//     memo[i] = memo[i - 1] + 1;
//   }
// }

for (let i = 2; i < N + 1; i++) {
  memo[i] = memo[i - 1] + 1;

  if (!(i % 2)) {
    memo[i] = Math.min(memo[i / 2] + 1, memo[i]);
  }

  if (!(i % 3)) {
    memo[i] = Math.min(memo[i / 3] + 1, memo[i]);
  }
}

console.log(memo[N]);
