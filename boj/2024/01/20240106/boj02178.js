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

let minPath = 1;
const BFS = (x, y) => {
  const queue = [[x, y]];
  visited[x][y] = true;

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [vx, vy] = queue.shift();

      for (let j = 0; j < 4; j++) {
        const nx = vx + dx[j];
        const ny = vy + dy[j];

        if (nx === N - 1 && ny === M - 1) {
          return minPath + 1;
        }

        if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
          if (maze[nx][ny] === 1) {
            queue.push([nx, ny]);
            visited[nx][ny] = true;
          }
        }
      }
    }
    minPath++;
  }
};

console.log(BFS(0, 0));
