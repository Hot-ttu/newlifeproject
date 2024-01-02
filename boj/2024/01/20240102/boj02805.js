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

const [N, M] = input.shift().split(" ").map(Number);

const heights = input.shift().split(" ").map(Number);

// (각각의 높이 - 현재 높이)의 합 => 원하는 값
// 합이 값보다 크면 => 현재 높이 올리기
// 합이 값보다 작으면 => 현재 높이 낮추기
// min < x < max로 시작

const max = Math.max(...heights);

const binarySearch = (start, end) => {
  let mid = Math.floor((end + start) / 2);

  if (start > end) {
    return mid;
  }

  let sum = 0;
  heights.forEach((height) => {
    if (height > mid) {
      sum += height - mid;
    }
  });

  if (sum === M) {
    return mid;
  } else if (sum < M) {
    return binarySearch(start, mid - 1);
  } else {
    return binarySearch(mid + 1, end);
  }
};

console.log(binarySearch(0, max));
