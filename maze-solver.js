class MazeSolver {
  constructor() {
    this.matrix = matrix;
  }

  findShortestPath(start, end) {
    const startX = start[0];
    const startY = start[1];
    const endX = end[0];
    const endY = end[1];

    //if start or end value is 0, return
    if (matrix[startX][startY] === 0 || matrix[endX][endY] === 0) {
      throw new Error("No path for this starting point!");
    }

    // Starting Breadth First Search algorithm
    const queue = [];
    const visited = new Set();
    const src = { x: startX, y: startY, dist: 0 };
    queue.push(src);

    while (queue.length) {
      const p = queue.shift();

      //find destination
      if (p.x === endX && p.y === endY) {
        this.formatResult(p);
        break;
      }

      // Moving up
      this.visitNode(visited, queue, p.x - 1, p.y, p);
      // Moving left
      this.visitNode(visited, queue, p.x, p.y - 1, p);
      // Moving down
      this.visitNode(visited, queue, p.x + 1, p.y, p);
      // Moving right
      this.visitNode(visited, queue, p.x, p.y + 1, p);
    }
  }

  formatResult(result) {
    if (!result) return console.log("No path bro' :(");
    const path = [];
    let p = result;
    do {
      path.unshift(`(${p.x}, ${p.y})`);
    } while ((p = p.prev) != null);
    console.log(path);
  }

  visitNode(visited, queue, x, y, parent) {
    // Out of matrix boundary
    if (x < 0 || y < 0 || x >= matrix.length || y >= matrix.length) return;

    // Invalid path
    if (matrix[x][y] === 0) return;

    let newNode = { x, y };
    // Updating distance, previous node and populating queue
    if (matrix[x][y] !== 0 && !visited.has(newNode)) {
      newNode.dist = parent.dist + 1;
      newNode.prev = parent;
      queue.push(newNode);
    }
    visited.add(newNode);
  }
}

module.exports = MazeSolver;
