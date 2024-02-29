const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "boj/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const numbers = input.shift().split(" ").map(Number);

let cnt = 0;
numbers.sort((a, b) => a - b);
numbers.forEach((num, idx) => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (left === idx) {
      left++;
    } else if (right === idx) {
      right--;
    } else if (sum === num) {
      cnt++;
      break;
    } else if (sum > num) {
      right--;
    } else if (sum < num) {
      left++;
    }
  }
});

console.log(cnt);
