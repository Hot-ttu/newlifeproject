function solution(N, M, V, graph) {
  // 여기에 코드를 작성해주세요
  const visited = new Array(N + 1).fill(false);

  resultDFS = "";
  DFS(graph, V, visited);
  console.log(resultDFS);

  visited.fill(false);
  resultBFS = "";
  BFS(graph, V, visited);
  console.log(resultBFS);
}

function DFS(graph, V, visited) {
  visited[V] = true;
  resultDFS += V + " ";

  graph[V].forEach((vertex) => {
    if (!visited[vertex]) {
      DFS(graph, vertex, visited);
    }
  });
}

function BFS(graph, V, visited) {
  queue = [V];
  visited[V] = true;
  resultBFS += V + " ";

  while (queue.length > 0) {
    const v = queue.shift();

    graph[v].forEach((vertex) => {
      if (!visited[vertex]) {
        queue.push(vertex);
        visited[vertex] = true;
        resultBFS += vertex + " ";
      }
    });
  }
}

const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map(Number));
}).on("close", () => {
  const [N, M, V] = input[0];
  const graph = [];
  for (let i = 1; i < N + 1; i++) {
    graph[i] = new Array();
  }
  for (let i = 1; i < M + 1; i++) {
    graph[input[i][0]].push(input[i][1]);
    graph[input[i][1]].push(input[i][0]);
  }
  graph.forEach((list) => {
    list.sort((a, b) => a - b);
  });
  solution(N, M, V, graph);
  process.exit();
});
