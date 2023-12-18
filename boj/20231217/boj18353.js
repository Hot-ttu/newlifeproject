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

const N = +input[0];

const soldiers = input[1].split(" ").map(Number).reverse();

const binarySearch = (arr, start, end, num) => {
  if (start >= end) {
    return end;
  }
  let mid = Math.floor((start + end) / 2);
  if (num < arr[mid]) {
    return binarySearch(arr, start, mid, num);
  } else {
    return binarySearch(arr, mid + 1, end, num);
  }
};

let result = [soldiers[0]];

soldiers.forEach((soldier) => {
  let index = binarySearch(result, 0, result.length, soldier);
  if (!result[index] && result[index - 1] < soldier) {
    result[index] = soldier;
  } else if (result[index] > soldier) {
    result[index] = soldier;
  }
});

// let result = [soldiers[0]];
// let ret = 0;

// for (let i = 1; i < N; i++) {
//   if (soldiers[i] > result[result.length - 1]) {
//     result.push(soldiers[i]);
//     ret = result.length - 1;
//   } else {
//     let index = binarySearch(result, 0, ret, soldiers[i]);
//     result[index] = soldiers[i];
//   }
// }

console.log(N - result.length);
