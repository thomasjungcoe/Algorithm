import { BinaryNode } from "./BinaryNode";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q: (BinaryNode<number> | null)[] = [head]; // we are going to pretend to use queue and not JS arraylist

  while (q.length) {
    const curr = q.shift() as BinaryNode<number> | undefined | null;
    if (!curr) {
      continue;
    }

    // search
    if (curr?.value === needle) {
      return true;
    }

    q.push(curr.left);
    q.push(curr.right);
  }

  return false;
}
