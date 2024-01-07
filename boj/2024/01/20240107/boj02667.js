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

const N = +input.shift();

const map = input.map((line) => line.split("").map(Number));
const visited = Array.from({ length: N }, () => new Array(N).fill(false));

const dirs = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];

let danziCnt = 0;
const houseCntInDanzi = [];

let BFS = (x, y) => {
  const queue = [[x, y]];
  visited[x][y] = true;

  let houseCnt = 0;
  while (queue.length) {
    const [vx, vy] = queue.shift();
    houseCnt++;

    dirs.forEach((dir) => {
      const nx = vx + dir[0];
      const ny = vy + dir[1];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
        if (map[nx][ny] === 1) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    });
  }
  return houseCnt;
};

map.forEach((line, i) => {
  line.forEach((house, j) => {
    if (house === 1 && !visited[i][j]) {
      houseCntInDanzi.push(BFS(i, j));
      danziCnt++;
    }
  });
});

houseCntInDanzi.sort((a, b) => a - b);

houseCntInDanzi.unshift(danziCnt);
console.log(houseCntInDanzi.join("\n"));
