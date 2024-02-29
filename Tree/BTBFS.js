"use strict";
exports.__esModule = true;
function bfs(head, needle) {
    var q = [head]; // we are going to pretend to use queue and not JS arraylist
    while (q.length) {
        var curr = q.shift();
        if (!curr) {
            continue;
        }
        // search
        if ((curr === null || curr === void 0 ? void 0 : curr.value) === needle) {
            return true;
        }
        q.push(curr.left);
        q.push(curr.right);
    }
    return false;
}
exports["default"] = bfs;
