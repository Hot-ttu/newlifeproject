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

const memo = Array.from({ length: N }, () => new Array(N));

let sumX = 0;
let sumY = 0;
for (let i = 0; i < N; i++) {
  sumY += table[0][i];
  sumX += table[i][0];
  memo[0][i] = sumY;
  memo[i][0] = sumX;
}

for (let i = 1; i < N; i++) {
  for (let j = 1; j < N; j++) {
    memo[i][j] =
      table[i][j] + memo[i - 1][j] + memo[i][j - 1] - memo[i - 1][j - 1];
  }
}

result = [];
coordinates.forEach((line) => {
  const [x1, y1, x2, y2] = line.map((num) => num - 1);
  [lowX, highX] = x1 > x2 ? [x2, x1] : [x1, x2];
  [lowY, highY] = y1 > y2 ? [y2, y1] : [y1, y2];

  let sum = memo[highX][highY];
  if (lowX > 0) {
    sum -= memo[lowX - 1][highY];
  }

  if (lowY > 0) {
    sum -= memo[highX][lowY - 1];
  }

  if (lowX > 0 && lowY > 0) {
    sum += memo[lowX - 1][lowY - 1];
  }
  result.push(sum);
});

console.log(result.join("\n"));
