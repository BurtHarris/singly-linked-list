'use strict';

const _ = require('lodash');

function build(args) {
  return args.reduce((head, item) => {
    const node = { value: item };

    let current = head;

    if (_.isEmpty(head)) {
      head = node;
      return head;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    return head;
  }, {});
}

class SinglyLinkedList {
  // Init List with given values
  constructor() {
    const args = Array.from(arguments) || [];
    this.head = build(args);
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
    this.head = build(tempList.reverse());
  }
}

module.exports = SinglyLinkedList;
