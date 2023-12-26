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

const dir = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];

const result = [];
for (let testCase = 0; testCase < T; testCase++) {
  const [M, N, K] = input.shift().split(" ").map(Number);
  // const map = new Array(N);
  // for (let i = 0; i < N; i++) {
  //   map[i] = new Array(M);
  // }
  const ground = Array.from(Array(N), () => Array(M).fill(0));
  // Array(N)은 길이가 N인 배열을 생성합니다. 이 배열의 각 요소는 undefined로 초기화됩니다.
  // Array.from 함수는 배열 또는 유사 배열 객체로부터 새로운 배열을 만듭니다. 첫 번째 인자로는 이 배열 또는 객체를 받고, 두 번째 인자로는 매핑 함수를 받습니다.
  // 매핑 함수 () => Array(M).fill(0)은 각 요소에 대해 실행됩니다. 이 함수는 길이가 M이고 모든 요소가 0으로 채워진 배열을 반환합니다.
  // 따라서 Array.from은 길이가 N이고 각 요소가 Array(M).fill(0)인 배열을 만들게 됩니다. 이렇게 만들어진 배열이 map 변수에 할당됩니다.

  for (let i = 0; i < K; i++) {
    const [x, y] = input.shift().split(" ").map(Number);
    ground[y][x] = 1;
  }

  let count = 0;

  const BFS = (ground, x, y) => {
    const visited = Array.from(Array(N), () => Array(M).fill(false));

    const queue = [[x, y]];
    visited[x][y] = true;
    ground[x][y] = 2;

    while (queue.length) {
      let [vx, vy] = queue.shift();

      dir.forEach((direction) => {
        const nx = vx + direction[0];
        const ny = vy + direction[1];

        if (nx >= 0 && nx < N && ny >= 0 && ny < M && ground[nx][ny] === 1 && !visited[nx][ny]) {
          queue.push([nx, ny]);
          ground[nx][ny] = 2;
          visited[nx][ny] = true;
        }
      });
    }
  };

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (ground[x][y] === 1) {
        BFS(ground, x, y);
        count++;
      }
    }
  }

  result.push(count);
}

console.log(result.join("\n"));
