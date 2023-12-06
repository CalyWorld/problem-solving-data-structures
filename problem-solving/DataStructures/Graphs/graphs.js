//undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdges(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    for (let i = 0; i < this.adjacencyList[v1].length; i++) {
      if (v2 === this.adjacencyList[v1][i]) {
        this.adjacencyList[v1].splice(i, 1);
      }
    }
    for (let i = 0; i < this.adjacencyList[v2].length; i++) {
      if (v1 === this.adjacencyList[v2][i]) {
        this.adjacencyList[v2].splice(i, 1);
      }
    }

    //you can try this method

    // const index1 = this.adjacencyList[v1].indexOf(v2);
    // const index2 = this.adjacencyList[v2].indexOf(v1);

    // if(index1 !== -1){
    //     this.adjacencyList[v1].splice(index1, 1);
    // }
    // if(index2 !== -1){
    //     this.adjacencyList[v2].splice(index2, 1);
    // }
  }
}

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Machida");
graph.addVertex("Newyork");
graph.addEdges("Tokyo", "Machida");
graph.addEdges("Newyork", "Tokyo");
graph.removeEdge("Tokyo", "Machida");
console.log("after edges were removed", graph.adjacencyList);
