class MazeSolverAllPaths {
  constructor(matrix) {
    this.matrix = matrix;
  }

  findAllPaths(start, end) {
    const startX = start[0];
    const startY = start[1];
    const endX = end[0];
    const endY = end[1];

    // If start or end point is 0, throw an error
    if (this.matrix[startX][startY] === 0 || this.matrix[endX][endY] === 0) {
      throw new Error("Choose a valid starting or ending point");
    }

    // Starting Breadth First Search algorithm
    const stack = [];
    const src = { x: startX, y: startY, dist: 0, visited: new Set() };
    stack.push(src);
    const allPaths = [];

    while (stack.length) {
      const p = stack.shift();

      // Find destination
      if (p.x === endX && p.y === endY) {
        allPaths.push(p);
      }

      // Moving up
      this.visitNode(stack, p.x - 1, p.y, p);
      // Moving left
      this.visitNode(stack, p.x, p.y - 1, p);
      // Moving down
      this.visitNode(stack, p.x + 1, p.y, p);
      // Moving right
      this.visitNode(stack, p.x, p.y + 1, p);
    }

    return allPaths.map((path) => this.formatAndPrintResult(path));
  }

  formatAndPrintResult(result) {
    const path = [];
    let p = result;
    do {
      path.unshift([p.x, p.y]);
    } while ((p = p.prev) != null);
    return path;
  }

  visitNode(stack, x, y, parent) {
    // Out of matrix boundary
    if (x < 0 || y < 0 || x >= this.matrix.length || y >= this.matrix[x].length)
      return;

    // Invalid path
    if (this.matrix[x][y] === 0) return;

    let newNode = { x, y };
    // Updating distance, previous node and populating queue
    if (
      this.matrix[x][y] !== 0 &&
      !parent.visited.has(JSON.stringify(newNode))
    ) {
      newNode.dist = parent.dist + 1;
      newNode.prev = parent;
      newNode.visited = new Set(parent.visited);
      newNode.visited.add(JSON.stringify({ x: parent.x, y: parent.y }));
      stack.push(newNode);
    }
  }
}

module.exports = MazeSolverAllPaths;
