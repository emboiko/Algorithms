/**
 * Singly Linked List
 * 
 * A [unidirectional] data structure that consists of nodes, 
 * and each node has a value and a pointer to another node, or null. 
 * 
 * No indices
 * No random access
 * Connected via nodes with a "next" pointer
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.length) return undefined;

    const temp = this.head;
    this.head = this.head.next;
    this.length--;

    if (!this.length) this.tail = null;
    return temp;
  }

  unshift(val) {
    const node = new Node(val);

    if (!this.length) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    node = new Node(val);
    return true;
  }

  insert(index, val) {
    // !! bang bang returns boolean association of given val
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
    if (index < 0 || index > this.length) return false;
    if (index === this.length) !!this.push(val)
    if (index === 0) !!this.unshift(val);

    const node = new Node(val);
    const previous = this.get(index - 1);
    const temp = previous.next;
    previous.next = node;
    node.next = temp;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previous = this.get(index - 1);
    const removed = previous.next;
    previous.next = removed.next;

    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let previous = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }

    return this;
  }
}
