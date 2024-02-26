const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "boj/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const S = input.shift();

const memo = new Array(4).fill(0n);

for (let i = 0; i < S.length; i++) {
  const char = S[i];

  switch (char) {
    case "D":
      memo[0] = memo[0] + 1n;
      break;
    case "K":
      memo[1] += memo[0];
      break;
    case "S":
      memo[2] += memo[1];
      break;
    case "H":
      memo[3] += memo[2];
      break;
  }
}

console.log(memo[3].toString());
