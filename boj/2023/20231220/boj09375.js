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

const T = +input.shift();

const result = [];
for (let testCase = 0; testCase < T; testCase++) {
  const n = +input.shift();
  let caseCount = 1;

  const clothes = [];
  for (let i = 0; i < n; i++) {
    clothes.push(input.shift().split(" "));
  }

  const clothType = new Map();
  clothes.forEach((cloth) => {
    if (!clothType.has(cloth[1])) {
      clothType.set(cloth[1], 1);
    } else {
      clothType.set(cloth[1], clothType.get(cloth[1]) + 1);
    }
  });

  clothType.forEach((value) => {
    caseCount *= value + 1;
  });

  caseCount--;

  result.push(caseCount);
}

console.log(result.join("\n"));
