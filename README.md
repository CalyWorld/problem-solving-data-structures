# problem-solving-data-structures

practice

# Graphs

Objectives

- Explain what a graph is
- Compare and Contrast different types of graphs and their use cases in the real world
- Implement a graph using an adjacency list
- Traverse through a graph using BFS and DFS

Graph in my own understanding is interconnection of nodes, there is no parent or children like in Trees, Connections can go to any node and there is no starting nodes.

![graphs.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/ddf06e62-fc19-4a7f-b48c-64ad5b1b1637/bfd81710-f0d9-49e5-a0ab-2d20a5645aec/graphs.jpg)

                                     A directed graph

Uses of Graphs

- Social Networks
- Location / Mapping
- Routing Algorithms
- Visual Hierarchy
- FIle System Optimizations
- **EVERYWHERE**

Recommendations

- People also watched
- You might also like
- People you might know
- Frequently bought with

Essential Graph Terms

- Vertex - a node
- Edge - connections between nodes
- weighted/unweighted - values assigned to distances between vertices
  - unweighted graphs are graphs with no values of connections
  - weighted graphs are graphs with values of connections
- directed/undirected - directions assigned to distanced between vertices
  - directed has pointed arrows to vertices
  - undirected has no pointed arrows to vertices
- **Adjacency matrix** is storing the connections each node is connected to using 0,1s

  | -   | A   | B   | C   | D   | E   | F   |
  | --- | --- | --- | --- | --- | --- | --- |
  | A   | 0   | 1   | 0   | 0   | 1   | 0   |
  | B   | 1   | 0   | 1   | 1   | 0   | 0   |
  | C   | 0   | 1   | 0   | 1   | 0   | 0   |
  | D   | 0   | 1   | 1   | 0   | 1   | 1   |
  | E   | 1   | 0   | 0   | 1   | 0   | 1   |
  | F   | 0   | 0   | 0   | 1   | 0   | 1   |

- **Adjacency list** is storing the connections each node is connected (edges) to using arrays

![graph2.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/ddf06e62-fc19-4a7f-b48c-64ad5b1b1637/70811302-9758-4b7a-91d8-c5d959349753/graph2.jpg)

```jsx
[(0)[(1, 5)], (1)[(0, 2)], (2)[(1, 3)], (3)[(2, 4)], (4)[(3, 5)], (5)[(4, 0)]];
```

- We can also using hash Tables, where we have key value pairs with the edges the nodes are connected to

![graph3.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/ddf06e62-fc19-4a7f-b48c-64ad5b1b1637/8d18c8a4-9780-4344-b1f1-14d16eff4d8c/graph3.jpg)

```jsx
{
	A: ["B", "E"],
	B: ["A", "C"],
	C: ["B", "D"],
	D: ["C", "F"],
	E: ["A", "F"],
	F: ["D", "E"]
}
```

- Differences & BIG 0
  - |V| - number of vertices
  - |E| - number of edges
  | Operation     | Adjacency List | Adjacency Matrix |
  | ------------- | -------------- | ---------------- | ---- | --- | ---- | --- | ---- | --- | --- |
  | Add Vertex    | O(1)           |                  | O (  | V^2 | )    |
  | Add Edge      | O(1)           |                  | O(1) |
  | Remove vertex | O (            | V                | +    | E   | )    |     | O (  | V^2 | )   |
  | Remove edge   | O (            | E                | )    |     | O(1) |
  | Query         | O (            | V                | +    | E   | )    |     | O(1) |
  | Storage       | O (            | V                | +    | E   | )    |     | O (  | V^2 | )   |
  So to simplify this table,

**Adjacency list**

| Can take up less space as we are just storing them as a key value pair.
| Faster to iterate over all edges because each key value pairs has it’s edges stored in arrays.
| Can be slow to look up specific edges because we have to find the key value pair then find the edges that is connected to that key value pair, lots of iterations going on.

**Adjacency Matrix**

| Takes up more space if you look at the column as it seems to add more column in the table.
| Too Slow because you have to go through the column table.
| Faster to look up specific edge because you can go to the column and find the edges using 0, 1s.
