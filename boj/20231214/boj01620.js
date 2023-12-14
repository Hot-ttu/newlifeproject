function solution(N, M, pocketMons, questions) {
  // 여기에 코드를 작성해주세요
  const pocketMonsDic = {};
  const answer = [];

  pocketMons.forEach((name, index) => {
    pocketMonsDic[name] = index + 1;
    pocketMonsDic[index + 1] = [name];
  });
  questions.forEach((question) => {
    answer.push(pocketMonsDic[question]);
  });

  console.log(answer.join("\n"));
}

const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [N, M] = input.shift().split(" ").map(Number);
  const pocketMons = input.slice(0, N);
  const questions = input.slice(N);
  solution(N, M, pocketMons, questions);
  process.exit();
});
