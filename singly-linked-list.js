'use strict';

const _ = require('lodash');

class SinglyLinkedList {
  // Init List with given values
  constructor(newList) {
    newList = newList || [];
    this.head = {};
    newList.forEach(item => this.push(item));
  }

  // Push element into the list
  push(ele) {
    const node = { value: ele };

    let current = this.head;

    if (_.isEmpty(this.head)) {
      this.head = node;
      return node;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    return node;
  }

  // A simple print
  print() {
    console.log(JSON.stringify(this.head, null, 2));
    return;
  }

  // Let's reverse the list
  reverse() {
    const tempList = [];
    let current = this.head;
    while (current.value || current.next) {
      if (current.value) tempList.push(current.value);
      current = current.next || {};
    }
    this.head = {};
    tempList.reverse().forEach(item => this.push(item));
  }
}

module.exports = SinglyLinkedList;
