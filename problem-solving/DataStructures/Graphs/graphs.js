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
  removeVertex(vertex) {
    for (let i = this.adjacencyList[vertex].length - 1; i >= 0; i--) {
      this.removeEdge(vertex, this.adjacencyList[vertex][i]);
    }
    delete this.adjacencyList[vertex];
  }

  //depth first traversal
  DFT(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdges("A", "B");
graph.addEdges("A", "C");
graph.addEdges("B", "D");
graph.addEdges("C", "E");
graph.addEdges("D", "E");
graph.addEdges("D", "F");
graph.addEdges("E", "F");

graph.DFT("A");
