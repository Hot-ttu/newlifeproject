/**
 * 처음엔 조합으로 좌표들의 쌍을 구해준 뒤
 * 매 번 새로운 map에 좌표들을 뿌리고 bfs를 구해서 구했는데
 * 시간초과가 떴다.
 * map을 새로 만드는데 상당한 시간이 소요되는 것으로 사료된다.
 *
 * 그래서, 집과 치킨집들의 좌표들을 각각 구해놓은 것을 활용하여 bfs를 굳이 하지 않고,
 * 집의 좌표에서 조합으로 뽑은 치킨집의 좌표들까지 거리 중
 * 최소인 각각의 거리들을 더해주는 식으로 집에서 가장 가까운
 * 치킨집까지의 거리를 구해서 비교해주었다.
 */
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "boj/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

let result = Infinity;

const city = input.map((line) => line.split(" ").map(Number));

const chicken = [];
const house = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (city[i][j] === 2) {
      chicken.push([i, j]);
    } else if (city[i][j] === 1) {
      house.push([i, j]);
    }
  }
}

const comResult = [];
let com = [];
const combination = (idx, depth) => {
  if (depth === M) {
    comResult.push([...com]);
    return;
  }

  for (let i = idx; i < chicken.length; i++) {
    com.push(i);
    combination(i + 1, depth + 1);
    com.pop();
  }
};

combination(0, 0);

outerLoop: for (const idxList of comResult) {
  let distSum = 0;
  for (const [x, y] of house) {
    let dist = Infinity;
    for (const idx of idxList) {
      const [x2, y2] = chicken[idx];
      dist = Math.min(dist, Math.abs(x2 - x) + Math.abs(y2 - y));
    }
    distSum += dist;
    if (distSum > result) {
      continue outerLoop;
    }
  }
  result = Math.min(result, distSum);
}

console.log(result);
