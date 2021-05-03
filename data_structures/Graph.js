class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return this;
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v != vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v != vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const popped = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, popped);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();

let f = g.addVertex("Istanbul");
let s = g.addVertex("Lisbon");
let t = g.addEdge("Istanbul", "Lisbon");

console.log("f", f);
console.log("s", s);
console.log("g", g);
