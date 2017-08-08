/*
  Compose Stack and Queue in Javascript using Linked List.
  Favor composition over inheritance.

  @flow
*/

import LinkedList from './linked-list';

export interface Stack<T> {
  peek(): ?T,
  push(v: T): void,
  pop(): ?T,
  isEmpty(): boolean,
  size(): number,
  toString(): string,
}

export function createStack<T>(): Stack<T> {
  const stack = new LinkedList();

  return {
    peek() {
      return stack.head ? stack.head.data : null;
    },

    push: stack.prepend.bind(stack),
    pop: stack.shift.bind(stack),
    isEmpty: stack.isEmpty.bind(stack),
    size: stack.size.bind(stack),
    toString: stack.toString.bind(stack),
  };
}

export interface Queue<T> {
  enqueue(v: T): void,
  dequeue(): ?T,
  isEmpty(): boolean,
  size(): number,
  toString(): string,
}

export function createQueue<T>(): Queue<T> {
  const queue = new LinkedList();

  return {
    enqueue: queue.prepend.bind(queue),
    // O(n) time
    dequeue: queue.pop.bind(queue),
    isEmpty: queue.isEmpty.bind(queue),
    size: queue.size.bind(queue),
    toString: queue.toString.bind(queue),
  };
}
