/**
 * Stack - LIFO - Last in / First out
 * 
 * Last elemented added to a stack will be the first element to be removed.
 * Used for managing function invocations, undo/redo, and much more.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.size) {
      this.first = node;
      this.last = node;
    } else {
      const temp = this.first;
      this.first = node;
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {
    if (!this.size) return null;
    const popped = this.first;

    if (this.size === 1) this.last = null;
    this.first = this.first.next;
    this.size--;
    return popped.val;
  }
}
