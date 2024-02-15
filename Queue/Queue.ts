type Node<T> = {
    value: T;
    next?: Node<T>;
}

// QUEUE Data Structure
// FIFO - First In First Out
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enquque(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) return undefined;
        
        this.length--;
        const head = this.head;
        this.head = this.head.next;

        // free up the memory for non-garbage collector languages

        return head.value;
    }

    peek(): T | undefined { 
        return this.head?.value;
    }
   
}