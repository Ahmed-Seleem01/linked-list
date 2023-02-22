const linkedList = (function linkedList() {
  const Node = function Node() {
    let value = null;
    let nextElement = null;
    return { value, nextElement };
  };

  let head = null;
  let tail = null;

  const append = function append(value) {
    const newNode = Node();
    newNode.value = value;
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.nextElement = newNode;
      tail = newNode;
      // console.log(head);
    }
  };

  const preappend = function preappend(value) {
    const newNode = Node();
    newNode.value = value;
    if (head === null) {
      return;
    } else {
      newNode.nextElement = head;
      head = newNode;
      // console.log(head);
    }
  };

  const headElement = function headElement() {
    return head;
  };

  const tailElement = function tailElement() {
    return tail;
  };

  const size = function size() {
    let nextTracker = head === null ? null : Object.assign({}, head);
    let counter = 0;
    if (nextTracker === null) return 0;
    while (nextTracker !== null) {
      nextTracker = nextTracker.nextElement;
      counter += 1;
    }
    return counter;
  };

  const at = function at(index) {
    let nextTracker = head === null ? null : Object.assign({}, head);
    if (nextTracker === null) return "No elements in list";
    if (typeof index !== "number") return "Enter correct index";
    if (index <= 0) return "Index start from 1";
    for (let i = 1; i < index; i++) {
      nextTracker = nextTracker.nextElement;
      if (nextTracker === null) return `No nodes at position ${index}`;
    }
    return nextTracker;
  };

  const pop = function pop() {
    if (head === null) return "No elements in list to remove";
    if (size() === 1) {
      head = null;
      tail = null;
      return;
    }
    tail = head;
    for (let i = 1; i < size() - 1; i++) {
      tail = tail.nextElement;
      //console.log(tail);
    }
    tail.nextElement = null;
  };

  const contains = function contains(value) {
    let nextTracker = head === null ? null : Object.assign({}, head);
    if (nextTracker === null) return 0;
    while (nextTracker !== null) {
      if (value === nextTracker.value) {
        return true;
      }
      nextTracker = nextTracker.nextElement;
    }
    return false;
  };

  const find = function find(value) {
    let nextTracker = head === null ? null : Object.assign({}, head);
    let index = 0;
    if (nextTracker === null) return 0;
    while (nextTracker !== null) {
      index += 1;
      if (value === nextTracker.value) {
        return index;
      }
      nextTracker = nextTracker.nextElement;
    }
    return null;
  };

  const toString = function toString() {
    let nextTracker = head === null ? null : Object.assign({}, head);
    let str = "";
    if (nextTracker === null) return 0;
    while (nextTracker !== null) {
      str += `(${nextTracker.value}) -> `;
      nextTracker = nextTracker.nextElement;
    }
    return str + null;
  };

  return {
    append,
    preappend,
    headElement,
    tailElement,
    size,
    at,
    pop,
    contains,
    find,
    toString,
  };
})();

linkedList.append("as");
linkedList.append("bs");
linkedList.append("fs");
linkedList.preappend("first");
linkedList.preappend("dfgf");
// linkedList.preappend("prefirst");
console.log("Head element", linkedList.headElement());
console.log("Tail element", linkedList.tailElement());
console.log(linkedList.size());
// console.log(linkedList.at(2));
// console.log(linkedList.pop());
// console.log(linkedList.pop());
// console.log(linkedList.pop());
// console.log(linkedList.pop());
// console.log(linkedList.pop());
// console.log(linkedList.at(2));
linkedList.append("ds");
console.log(linkedList.size());
console.log(linkedList.contains("first"));
console.log(linkedList.find("dfgf"));
console.log(linkedList.toString());
console.log("Head element", linkedList.headElement());
console.log("Tail element", linkedList.tailElement());
