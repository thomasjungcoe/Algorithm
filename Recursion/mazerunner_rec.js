const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];
function walk(maze, wall, curr, end, seen, path) {
    // Base Cases
    // 1.) off map
    if (curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length) {
        return false;
    }
    // 2.) it's a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }
    // 3.) it's the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }
    // 4.) we have seen it
    if (seen[curr.y][curr.x]) {
        return false;
    }
    // Recursive steps
    // 1.) pre
    seen[curr.y][curr.x] = true;
    path.push(curr);
    // 2.) recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (walk(maze, wall, {
            x: curr.x + x,
            y: curr.y + y,
        }, end, seen, path)) {
            // if end is true, we need to stop the recursion
            return true;
        }
    }
    // 3.) post
    path.pop();
    return false;
}
export default function solve(maze, wall, start, end) {
    const seen = [];
    const path = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }
    walk(maze, wall, start, end, seen, path);
    return path;
}
