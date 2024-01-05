const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];

const [N, M] = input.shift().split(" ").map(Number);

const campus = input.map((line) => line.replace("\r", "").split(""));
const visited = Array.from({ length: N }, () => new Array(M).fill(false));

let [X, Y] = [0, 0];
campus.forEach((line, i) => {
  line.forEach((pos, j) => {
    if (pos === "I") {
      [X, Y] = [i, j];
    }
  });
});

let cnt = 0;
const BFS = (X, Y) => {
  const queue = [[X, Y]];
  visited[X][Y] = true;

  while (queue.length) {
    const [vx, vy] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = vx + dx[i];
      const ny = vy + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
        if (campus[nx][ny] !== "X") {
          if (campus[nx][ny] === "P") {
            cnt++;
          }

          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }
};

BFS(X, Y);

if (cnt === 0) {
  console.log("TT");
} else {
  console.log(cnt);
}
