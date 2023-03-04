const MazeSolver = require("./maze-solver");

const INVALID_POINT = "Choose a valid starting or ending point";
const NO_PATH_FOUND = "No path found :(";

const matrix = [
  [1, 0, 1],
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

describe("Maze Solver Testing", () => {
  const maze = new MazeSolver(matrix);

  it("should throw an error if wrong start or end point", () => {
    expect(() => maze.findShortestPath([0, 1], [1, 2])).toThrow(INVALID_POINT);
    expect(() => maze.findShortestPath([0, 2], [0, 1])).toThrow(INVALID_POINT);
  });

  it("should return a message if no path has been found", () => {
    expect(maze.findShortestPath([0, 0], [3, 2])).toBe(NO_PATH_FOUND);
  });

  it("should return the expected value", () => {
    const expected = [
      [0, 2],
      [1, 2],
    ];
    const res = maze.findShortestPath([0, 2], [1, 2]);
    expect(maze.findShortestPath).toBeTruthy();
    expect(res).toEqual(expected);
    expect(Array.isArray(res)).toBe(true);
  });
});
