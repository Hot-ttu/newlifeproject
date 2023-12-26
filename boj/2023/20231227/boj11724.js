const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

[N, M] = input.shift().split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => new Array());
const visited = Array.from({ length: N + 1 }).fill(false);

input.forEach((line) => {
  [A, B] = line.split(" ").map(Number);
  graph[A].push(B);
  graph[B].push(A);
});

let connetedCnt = 0;

const BFS = (graph, start, visited) => {
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const v = queue.shift();

    graph[v].forEach((vertex) => {
      if (!visited[vertex]) {
        queue.push(vertex);
        visited[vertex] = true;
      }
    });
  }
};

for (let i = 1; i < N + 1; i++) {
  if (!visited[i]) {
    BFS(graph, i, visited);
    connetedCnt++;
  }
}

console.log(connetedCnt);
