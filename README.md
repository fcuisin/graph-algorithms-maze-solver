## Maze solver with Breadth First Search 🐍

The goal of this mini-project was to upgrade my algo' skills by finding the shortest distance from the source to the destination in a graph.
As you know, graph can be represented as adjacency matrix. That's why, the **Breadth First Search** seems to be the perfect fit to solve the problem!

For a given matrix:

```
const matrix = [
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const start = [0, 2];
const end = [4, 2];
```

Output:

```
[ '(0, 2)', '(1, 2)', '(2, 2)', '(3, 2)', '(4, 2)' ]
```

_To do : Make it more interactive by adding an interface_
