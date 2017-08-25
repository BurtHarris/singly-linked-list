'use strict';

const SinglyLinkedList = require('./singly-linked-list');

// Sequence [9, 6, 1, 2, 3, 4]

const s = new SinglyLinkedList([9, 6]);

s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.print();
s.reverse();
s.print();
