'use strict';

const chai = require('chai');
const SinglyLinkedList = require('./singly-linked-list');

const expect = chai.expect;

describe('SinglyLinkedList sequence', () => {

  it('should be empty if not sequence provided', () => {
    let emptyList = new SinglyLinkedList();
    let anotherEmptyList = new SinglyLinkedList([]);

    expect(emptyList.list).to.be.empty;
    expect(anotherEmptyList.list).to.be.empty;
  });

  it('should build sequence if provided', () => {
    const linkedList = new SinglyLinkedList(['3', 5, 7, 'another']);
    linkedList.push('one more');
    linkedList.push(1);

    expect(linkedList.list).to.eql([
      { value: '3', next: 5 },
      { value: 5, next: 7 },
      { value: 7, next: 'another' },
      { value: 'another', next: 'one more' },
      { value: 'one more', next: 1 },
      { value: 1}
    ]);
  })

  it('should reverse sequence', () => {
    const linkedList = new SinglyLinkedList([1, 2, 3, 4]);
    linkedList.push('one more');
    linkedList.reverse();

    expect(linkedList.list).to.eql([
      { value: 'one more', next: 4 },
      { value: 4, next: 3 },
      { value: 3, next: 2 },
      { value: 2, next: 1 },
      { value: 1 }
    ]);
  })
});
