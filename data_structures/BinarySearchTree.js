class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  push(value) {
    let node = new Node(value);
    let current = this.root;
    if (!this.root) {
      this.root = node;
      this.size++;
      return this;
    }
    while (true) {
      if (value >= current.data) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = node;
          this.size++;
          return this;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          current.left = node;
          this.size++;
          return this;
        }
      }
    }
  }
  find(value) {
    if (!this.root) {
      return false;
    }
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value == current.data) {
        found = true;
      } else if (value > current.data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return found;
  }
  _size() {
    return this.size;
  }
  BFS() {
    let current = this.root;
    let queue = [current];
    let visited = [];
    while (queue.length) {
      current = queue.shift();
      visited.push(current.data);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return visited;
  }
}

let myTree = new BinarySearchTree();
myTree.push(10);
myTree.push(5);
myTree.push(8);
myTree.push(13);
myTree.push(9);
let found = myTree.find(9);
console.log("found: ", found);
let size = myTree._size();
console.log("size", size);
let bfs = myTree.BFS();
console.log(bfs);
