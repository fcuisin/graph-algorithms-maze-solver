class MazeSolver {
  constructor(matrix) {
    this.matrix = matrix;
  }

  findShortestPath(start, end) {
    const startX = start[0];
    const startY = start[1];
    const endX = end[0];
    const endY = end[1];

    // If start or end point is 0, throw an error
    if (this.matrix[startX][startY] === 0 || this.matrix[endX][endY] === 0) {
      throw new Error("Choose a valid starting or ending point");
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
        return this.formatAndPrintResult(p);
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

    return "No path found :(";
  }

  formatAndPrintResult(result) {
    const path = [];
    let p = result;
    do {
      path.unshift([p.x, p.y]);
    } while ((p = p.prev) != null);
    return path;
  }

  visitNode(visited, queue, x, y, parent) {
    // Out of matrix boundary
    if (x < 0 || y < 0 || x >= this.matrix.length || y >= this.matrix[x].length)
      return;

    // Invalid path
    if (this.matrix[x][y] === 0) return;

    let newNode = { x, y };
    // Updating distance, previous node and populating queue
    if (this.matrix[x][y] !== 0 && !visited.has(JSON.stringify(newNode))) {
      newNode.dist = parent.dist + 1;
      newNode.prev = parent;
      queue.push(newNode);
    }
    visited.add(JSON.stringify({ x, y }));
  }
}

module.exports = MazeSolver;
