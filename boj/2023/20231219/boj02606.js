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

const N = +input[0];

const edges = +input[1];

const vertices = new Array(N + 1).fill(null).map(() => []);
const visited = new Array(N + 1).fill(false);

for (let i = 2; i < 2 + edges; i++) {
  [A, B] = input[i].split(" ").map(Number);
  vertices[A].push(B);
  vertices[B].push(A);
}

const bfs = (vertices, start) => {
  let queue = [start];
  visited[start] = true;
  let count = 0;

  while (queue.length) {
    let vertex = queue.shift();

    vertices[vertex].forEach((opposite) => {
      if (!visited[opposite]) {
        queue.push(opposite);
        visited[opposite] = true;
        count++;
      }
    });
  }

  return count;
};

console.log(bfs(vertices, 1));
