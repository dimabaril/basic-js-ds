const { Node } = require("../extensions/list-tree.js");

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchData(this.rootNode, data);

    function searchData(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return searchData(node.left, data);
      } else {
        return searchData(node.right, data);
      }
    }
  }

  find(data) {
    return findData(this.rootNode, data);

    function findData(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return findData(node.left, data);
      } else {
        return findData(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = removeData(this.rootNode, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        // we can use left branch to find the biggest value
        // or right branch to find the smallest value
        let goRight = node.right;
        while (goRight.left) {
          goRight = goRight.left;
        }
        node.data = goRight.data;
        node.right = removeData(node.right, goRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return;
    }
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return;
    }
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

let tree = new BinarySearchTree();
tree.add(9);
tree.add(4);
tree.add(17);
tree.add(3);
tree.add(6);
tree.add(22);
console.log(tree.root());
tree.remove(4);

console.log(tree.root());
// console.log(tree.has(17));
// console.log(tree.has(1));
// console.log(tree.find(17));
// console.log(tree.find(1));
console.log(tree.min());
console.log(tree.max());
