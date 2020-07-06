/**
 * Binary Search Tree
 * 
 * Every parent node has at most two children
 * Every node to the left of a parent node is always less than the aprent
 * Every node to the right of a parent node is aways greater than the parent
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);

    if (!this.root) {
      this.root = node;
      return this;
    } else {

      let current = this.root;
      while (true) {

        if (val === current.val) return undefined;

        if (val < current.val) {

          if (!current.left) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }

        } else if (val > current.val) {

          if (!current.right) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) return false;

    let current = root;
    let found = false;

    while (current && !found) {
      if (val < current.value) current = current.left;
      else if (val > current.val) current = current.right;
      else found = true;
    }
    if (!found) return false;
    return current;
  }

  BFS() {
    const data = [], queue = [];
    let node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  preOrderDFS() {
    const data = [];
    const traverse = (node) => {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  postOrderDFS() {
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }

  inOrderDFS() {
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}
