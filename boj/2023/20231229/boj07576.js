const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const box = input.map((line) => line.split(" ").map(Number));
const visited = Array.from({ length: M }, () => new Array(N).fill(false));
const queue = [];
let idx = 0;

const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (box[i][j] === 1) {
      queue.push([i, j]);
      visited[i][j] = true;
    }
  }
}

if (queue.length === N * M) {
  console.log(0);
  process.exit(0);
}

let cnt = -1;

while (queue.length > idx) {
  const size = queue.length - idx;
  cnt++;

  for (let t = 0; t < size; t++) {
    const [vx, vy] = queue[idx++];
    box[vx][vy] = 1;

    for (let i = 0; i < 4; i++) {
      const nx = vx + dx[i];
      const ny = vy + dy[i];

      if (nx >= 0 && nx < M && ny >= 0 && ny < N && !visited[nx][ny]) {
        if (box[nx][ny] === -1) {
          continue;
        }

        queue.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }
  }
}

box.forEach((line) => {
  line.forEach((tomato) => {
    if (tomato === 0) {
      cnt = -1;
    }
  });
});

console.log(cnt);
