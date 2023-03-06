const MazeSolverAllPaths = require("./mazeSolverAllPaths.js");

const INVALID_POINT = "Choose a valid starting or ending point";

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
  [0, 0, 1],
  [0, 1, 0],
];

describe("Maze Solver Testing", () => {
  const maze = new MazeSolverAllPaths(matrix);

  it("should throw an error if wrong start or end point", () => {
    expect(() => maze.findAllPaths([1, 1], [1, 0])).toThrow(INVALID_POINT);
    expect(() => maze.findAllPaths([1, 2], [1, 1])).toThrow(INVALID_POINT);
  });

  it("should return a message if no path has been found", () => {
    expect(maze.findAllPaths([2, 0], [4, 1]).length).toBe(0);
  });

  it("should return the expected value", () => {
    const expected = [
      [
        [0, 2],
        [1, 2],
        [2, 2],
        [3, 2],
      ],
      [
        [0, 2],
        [0, 1],
        [0, 0],
        [1, 0],
        [2, 0],
        [2, 1],
        [2, 2],
        [3, 2],
      ],
    ];
    const res = maze.findAllPaths([0, 2], [3, 2]);
    expect(maze.findAllPaths).toBeTruthy();
    expect(res).toEqual(expected);
    expect(Array.isArray(res)).toBe(true);
    expect(res.length).toBe(2);
  });
});
