# problem-solving-data-structures

practice

# Graphs

Objectives

- Explain what a graph is
- Compare and Contrast different types of graphs and their use cases in the real world
- Implement a graph using an adjacency list
- Traverse through a graph using BFS and DFS

Graph in my own understanding is interconnection of nodes, there is no parent or children like in Trees, Connections can go to any node and there is no starting nodes.

![graphs](https://github.com/CalyWorld/problem-solving-data-structures/assets/88979648/9e6477e6-f1cf-456d-8bc4-20198ec7cfaa)


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

![graph2](https://github.com/CalyWorld/problem-solving-data-structures/assets/88979648/eeda2146-1e5f-4690-a754-c6b7053840a4)


```jsx
   [
        0:   [1,5],
        1:   [0,2],
        2:   [1,3],
        3:   [2,4],
        4:   [3,5],
        5:   [4,0]
   ]
```

- We can also using hash Tables, where we have key value pairs with the edges the nodes are connected to

![graph3](https://github.com/CalyWorld/problem-solving-data-structures/assets/88979648/80e0bae1-7366-4436-a92c-1bdc4176d938)


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
- 
**Adjacency list**

| Can take up less space as we are just storing them as a key value pair.
| Faster to iterate over all edges because each key value pairs has it’s edges stored in arrays.
| Can be slow to look up specific edges because we have to find the key value pair then find the edges that is connected to that key value pair, lots of iterations going on.

**Adjacency Matrix**

| Takes up more space if you look at the column as it seems to add more column in the table.
| Too Slow because you have to go through the column table.
| Faster to look up specific edge because you can go to the column and find the edges using 0, 1s.
