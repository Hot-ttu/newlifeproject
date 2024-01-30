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

const front = input.map(Number);
let currentRoot = front.shift();

class Node {
  constructor(value, leftChild, rightChild) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

const Tree = new Node(currentRoot, null, null);
let current = Tree;

const insert = (num, root) => {
  if (num < root.value) {
    if (!root.leftChild) {
      root.leftChild = new Node(num, null, null);
    } else {
      insert(num, root.leftChild);
    }
  } else {
    if (!root.rightChild) {
      root.rightChild = new Node(num, null, null);
    } else {
      insert(num, root.rightChild);
    }
  }
};

front.forEach((num) => {
  insert(num, Tree);
});

current = Tree;

const search = (current) => {
  if (current.leftChild) {
    search(current.leftChild);
  }
  if (current.rightChild) {
    search(current.rightChild);
  }
  console.log(current.value);
  return;
};

search(current);
