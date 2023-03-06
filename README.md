## Maze solver with Breadth First Search 🐍

The goal of this project was to create an algorithm in JavaScript to solve a maze. A graph can be represented as adjacency matrix. That's why, the **Breadth First Search** seems to be the perfect fit to solve the problem!

Here are two algorithms: one to find the shortest path and another one to find all possible paths.

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

### Shortest Path

Output:

```
[ '(0, 2)', '(1, 2)', '(2, 2)', '(3, 2)', '(4, 2)' ]
```

### All Paths

Output:

```
[
  [ [ 0, 2 ], [ 1, 2 ], [ 2, 2 ], [ 3, 2 ], [ 4, 2 ] ],
  [ [ 0, 2 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 4, 1 ], [ 4, 2 ] ]
]
```

_To do : Make it more interactive by adding an interface_
