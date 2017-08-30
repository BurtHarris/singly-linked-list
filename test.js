'use strict';

const chai = require('chai');
const SinglyLinkedList = require('./singly-linked-list');

const expect = chai.expect;

describe('SinglyLinkedList sequence', () => {

  it('should be empty if not sequence provided', () => {
    let emptyList = new SinglyLinkedList();
    let anotherEmptyList = new SinglyLinkedList([]);

    expect(emptyList.head).to.be.empty;
    expect(anotherEmptyList.head).to.be.empty;
  });

  it('should build sequence if provided', () => {
    const linkedList = new SinglyLinkedList(['3', 5, 7, 'another']);
    linkedList.push('one more');
    linkedList.push(1);

    expect(linkedList.head).to.eql({
      value: '3',
      next: {
        value: 5,
        next: {
          value: 7,
          next: {
            value: 'another',
            next: {
              value: 'one more',
              next: {
                value: 1
              }
            }
          }
        }
      }
    });
  })

  it('should reverse sequence', () => {
    const linkedList = new SinglyLinkedList([1, 2, 3, 4]);
    linkedList.push('one more');
    linkedList.reverse();

    expect(linkedList.head).to.eql({
      value: 'one more',
      next: {
        value: 4,
        next: {
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1
            }
          }
        }
      }
    });
  })
});
