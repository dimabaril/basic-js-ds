const { ListNode } = require("../extensions/index.js");

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const linkedList = new ListNode(cur);
      linkedList.next = acc;
      return linkedList;
    }

    return new ListNode(cur);
  }, null);
}
const lnkdLst = convertArrayToList([3, 1, 2, 3, 4, 5]);

console.log(lnkdLst);

// without class the head of linkedList is just a some node
function removeKFromList(head, k) {
  let currNode = head;
  let prev = null;

  while (currNode) {
    if (currNode.value === k) {
      if (prev === null) {
        head = currNode.next;
      } else {
        prev.next = currNode.next;
      }
    } else {
      prev = currNode;
    }
    currNode = currNode.next;
  }
  return head;
}

console.log(removeKFromList(lnkdLst, 3));
