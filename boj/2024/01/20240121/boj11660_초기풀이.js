// 한 줄씩 누적합 구하는 것이라 너무 오래걸림
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

const table = input.slice(0, N).map((line) => line.split(" ").map(Number));

const coordinates = input.slice(N).map((line) => line.split(" ").map(Number));

const memo = table.map((row) =>
  row.reduce((accumulator, currentValue) => {
    accumulator.push(
      accumulator.length > 0
        ? accumulator[accumulator.length - 1] + currentValue
        : currentValue
    );
    return accumulator;
  }, [])
);

result = [];
coordinates.forEach((line) => {
  const [x1, y1, x2, y2] = line.map((num) => num - 1);
  [lowX, highX] = x1 > x2 ? [x2, x1] : [x1, x2];
  [lowY, highY] = y1 > y2 ? [y2, y1] : [y1, y2];

  let sum = 0;
  for (let i = lowX; i <= highX; i++) {
    sum += lowY > 0 ? memo[i][highY] - memo[i][lowY - 1] : memo[i][highY];
  }
  result.push(sum);
});

console.log(result.join("\n"));
