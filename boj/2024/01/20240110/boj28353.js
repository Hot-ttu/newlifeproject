const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);

const weight = input.shift().split(" ").map(Number);

weight.sort((a, b) => a - b);

let cnt = 0;
let left = 0;
let right = N - 1;
while (left < right) {
  if (weight[left] + weight[right] > K) {
    right--;
  } else if (weight[left] + weight[right] <= K) {
    left++;
    right--;
    cnt++;
  }
}

console.log(cnt);
