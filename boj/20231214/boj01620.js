function solution(N, M, pocketMons, questions) {
  // 여기에 코드를 작성해주세요
  const pocketMonsDic = {};
  pocketMons.forEach((name, index) => {
    pocketMonsDic[name] = index + 1;
  });
  questions.forEach((question) => {
    if (Number(question)) {
      console.log(pocketMons[Number(question) - 1]);
    } else {
      console.log(pocketMonsDic[question]);
    }
  });
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
