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

const N = +input.shift();

const Tree = {};

input.forEach((line) => {
  const [name, leftChild, rightChild] = line.split(" ");
  Tree[name] = [leftChild, rightChild];
});

let result = "";
const preOrder = (name) => {
  if (name === ".") return;
  const [leftChild, rightChild] = Tree[name];

  result += name;
  preOrder(leftChild);
  preOrder(rightChild);
};

const inOrder = (name) => {
  if (name === ".") return;
  const [leftChild, rightChild] = Tree[name];

  inOrder(leftChild);
  result += name;
  inOrder(rightChild);
};

const postOrder = (name) => {
  if (name === ".") return;
  const [leftChild, rightChild] = Tree[name];

  postOrder(leftChild);
  postOrder(rightChild);
  result += name;
};

preOrder("A");
result += "\n";
inOrder("A");
result += "\n";
postOrder("A");

console.log(result);
