const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "boj/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const answers = input.shift().split(" ").map(Number);

const upList = new Array(N + 1).fill(0);
const downList = new Array(N + 1).fill(0);
const resultList = new Array(N + 1).fill(false);

answers.forEach((answer) => {
  if (answer > 0) {
    upList[answer]++;
  } else {
    downList[Math.abs(answer)]++;
  }
});

for (let i = 0; i < N; i++) {
  upList[i + 1] += upList[i];
}

for (let i = N; i > 0; i--) {
  downList[i - 1] += downList[i];
}

for (let i = 0; i < N + 1; i++) {
  if (upList[N] - upList[i] + downList[0] - downList[i] === i) {
    resultList[i] = true;
  }
}

const realResultList = [];
resultList.forEach((result, idx) => {
  if (result) {
    realResultList.push(idx);
  }
});

console.log(realResultList.length);
console.log(realResultList.join(" "));
