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

const N = +input.shift();

const list = input.shift().split(" ").map(Number);

const memo = [list[0]];

const BinarySearch = (start, end, target) => {
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (memo[mid] === target) {
      return mid;
    } else if (memo[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
};
// 이분탐색 주의할 점 => 같을 때 처리 안 해주면 안됨!

list.forEach((num) => {
  const idx = BinarySearch(0, memo.length, num);
  if (!memo[idx] && memo[idx - 1] < num) {
    memo[idx] = num;
  } else if (memo[idx] > num) {
    memo[idx] = num;
  }
});
// memo에 담는 값 => index길이의 수열이 가능할 때 그 수열에서 가장 큰 값

console.log(memo.length);
