/**
 * Doubly Linked List
 * 
 * A [bidirectional] data structure that consists of nodes, 
 * and each node has a:
 *  - value 
 *  - pointer to next node (or null)
 *  - pointer to previous node (or null) 
 * 
 * No indices
 * No random access
 * Connected via nodes with a "next" & "previous" pointer
 * Can be quicker, costs more memory
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.length) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return undefined;
    const popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.previous;
      this.tail.next = null;
      popped.previous = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    if (!this.length) return undefined;

    const shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.previous = null;
      shifted.next = null;
    }

    this.length--;
    return shifted;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.length) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count, current;
    if (index <= this.length / 2) {
      // Forward
      count = 0;
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      // Backward
      count = this.length - 1;
      current = this.tail;
      while (count != index) {
        current = current.previous;
        count--;
      }
    }

    return current;
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return false
    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const node = new Node(val);
    const previous = this.get(index - 1);
    const after = previous.next;

    previous.next = node, node.previous = previous;
    node.next = after, after.previous = node;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removed = this.get(index);
    const previous = removed.previous;
    const after = removed.next;

    previous.next = after, after.previous = previous;
    removed.next = null, removed.previous = null;

    this.length--;
    return removed;
  }

}
