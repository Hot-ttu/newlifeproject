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

const T = +input[0];

result = [];
for (let testCase = 0; testCase < T; testCase++) {
  const N = +input[testCase * 4 + 1];

  const note1 = new Set(input[testCase * 4 + 2].split(" ").map(Number));

  const M = +input[testCase * 4 + 3];

  const note2 = input[testCase * 4 + 4].split(" ").map(Number);

  note2.forEach((num) => {
    if (note1.has(num)) {
      result.push(1);
    } else {
      result.push(0);
    }
  });
}
console.log(result.join("\n"));
