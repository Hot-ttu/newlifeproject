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

const maze = input.map((line) => line.split("").map(Number));
const visited = Array.from({ length: N }, () => new Array(M).fill(false));

const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];

let minDepth = Infinity;
const DFS = (x, y, depth) => {
  if (x === N - 1 && y === M - 1) {
    minDepth = Math.min(minDepth, depth + 1);
    return;
  }

  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
      if (maze[nx][ny] === 1) {
        DFS(nx, ny, depth + 1);
        visited[nx][ny] = false;
      }
    }
  }
};

DFS(0, 0, 0);

console.log(minDepth);
