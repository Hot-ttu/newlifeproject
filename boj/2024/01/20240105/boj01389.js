const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => new Array());

input.forEach((line) => {
  const [A, B] = line.split(" ").map(Number);
  graph[A].push(B);
  graph[B].push(A);
});

const BFS = (start) => {
  const queue = [start];
  const visited = new Array(N + 1).fill(false);
  visited[start] = true;

  let cnt = 0;
  let depth = 1;
  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      const vertex = queue.shift();

      graph[vertex].forEach((oppo) => {
        if (!visited[oppo]) {
          queue.push(oppo);
          visited[oppo] = true;
          cnt += depth;
        }
      });
    }

    depth++;
  }

  return cnt;
};

const result = [];
for (let i = 1; i < N + 1; i++) {
  result[i] = BFS(i);
}

let minDis = Infinity;
let minVertex = 1;
result.forEach((dis, idx) => {
  if (idx !== 0 && dis < minDis) {
    minDis = dis;
    minVertex = idx;
  }
});

console.log(minVertex);
