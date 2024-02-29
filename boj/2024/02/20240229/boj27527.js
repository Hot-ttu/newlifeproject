const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "boj/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const X = Math.ceil((9 * M) / 10);

const AList = input.shift().split(" ").map(Number);

const AMap = new Map();

for (let i = 0; i < M; i++) {
  const num = AList[i];

  const numVal = AMap.get(num);
  if (numVal) {
    AMap.set(num, numVal + 1);
  } else {
    AMap.set(num, 1);
  }
}

let flag = false;

for (let value of AMap.values()) {
  if (value >= X) {
    flag = true;
  }
}

for (let left = 0, right = M; right < N; left++, right++) {
  if (flag) break;

  const leftNum = AList[left];
  const rightNum = AList[right];

  const leftVal = AMap.get(leftNum);
  AMap.set(leftNum, leftVal - 1);

  const rightVal = AMap.get(rightNum);
  if (rightVal) {
    if (rightVal + 1 >= X) {
      flag = true;
      break;
    }
    AMap.set(rightNum, rightVal + 1);
  } else {
    AMap.set(rightNum, 1);
  }
}

if (flag) {
  console.log("YES");
} else {
  console.log("NO");
}
