const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const ground = input.map((line) => line.split(" ").map(Number));
const visited = Array.from({ length: N }, () => new Array(M).fill(false));

let [X, Y] = [0, 0];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (ground[i][j] === 2) {
      [X, Y] = [i, j];
    } else if (ground[i][j] !== 0) {
      ground[i][j] = -1;
    }
  }
}

const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];

const BFS = (x, y) => {
  let queue = [[x, y]];
  visited[x][y] = true;

  let cnt = 0;
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const [vx, vy] = queue.shift();
      ground[vx][vy] = cnt;

      for (let i = 0; i < 4; i++) {
        const nx = vx + dx[i];
        const ny = vy + dy[i];

        if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
          if (ground[nx][ny] === -1) {
            queue.push([nx, ny]);
            visited[nx][ny] = true;
          }
        }
      }
    }
    cnt++;
  }
};

BFS(X, Y);
console.log(ground.map((line) => line.join(" ")).join("\n"));
