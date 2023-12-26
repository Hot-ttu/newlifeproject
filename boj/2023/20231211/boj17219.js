function solution(N, M, datas_dic, site_to_search) {
  // 여기에 코드를 작성해주세요
  var results = new String();
  site_to_search.forEach((site) => {
    results += datas_dic[site] + "\n";
  });
  console.log(results);
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
  const datas_dic = {};
  input.slice(0, N).forEach((line) => {
    const [site, pwd] = line.split(" ");
    datas_dic[site] = pwd;
  });
  const site_to_search = input.slice(N);
  solution(N, M, datas_dic, site_to_search);
  process.exit();
});
