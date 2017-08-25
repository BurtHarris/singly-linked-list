'use strict';

class SinglyLinkedList {
  // Init List with given values
  constructor(newList) {
    this.list = [];
    newList.forEach(item => this.push(item));
  }

  // Push element into the list
  push(ele) {
    const node = { value: ele };
    this.list.push(node);

    const lastIndex = this.list.length - 2;

    if (this.list[lastIndex]) { // Does it have a last node to expose `next` in sequence ?
      const lastNode = this.list[lastIndex];
      lastNode.next = ele;
      this.list[lastIndex] = lastNode;
    }

    return node;
  }

  // A simple print
  print() {
    console.log(this.list);
    return;
  }

  // Let's reverse the list
  reverse() {
    const tempList = this.list;
    this.list = [];
    tempList.map(node => node.value).reverse().forEach(item => this.push(item));
  }
}

module.exports = SinglyLinkedList;
