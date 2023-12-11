function solution(N, M, datas_dic, site_to_search) {
  // 여기에 코드를 작성해주세요
  site_to_search.forEach((site) => {
    console.log(datas_dic[site]);
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
  const [N, M] = input[0].split(" ").map((el) => parseInt(el));
  const datas = input.slice(1, N + 1).map((line) => line.split(" "));
  const datas_dic = {};
  datas.forEach((site) => {
    datas_dic[site[0]] = site[1];
  });
  const site_to_search = input.slice(N + 1);
  solution(N, M, datas_dic, site_to_search);
  process.exit();
});
