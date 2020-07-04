/**
 * Queue - FIFO - First in / First out
 * 
 * First elemented added to a queue will be the first element to be removed.
 * Used for background tasks, uploading resourcs, printing / task processing.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (!this.size) {
      this.first = node;
      this.last = this.first;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.size) return null;

    const temp = this.first;
    if (this.first === this.last) this.last = null;

    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}
