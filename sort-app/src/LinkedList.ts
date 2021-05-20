import { Node } from './Node';
import { Sorter } from './Sorter';
export class LinkedList extends Sorter {

  head: Node | null = null;

  get length():number {
    if (!this.head) return 0;
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) throw new Error('Linked List is empty');
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter == index) return node;
      node = node.next;
      counter++;
    }

    throw new Error('Index out of bounds');
  }

  add(data: number): void {
    const node = new Node(data);
    console.log(`adding ${data} to linked list. current head is ${this.head}`)
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  compare(leftIndex: number, rightIndex: number):boolean {
    if (!this.head) throw new Error('List is empty');
    // console.log(`
    // left value is ${this.at(leftIndex).data} at index ${leftIndex}
    // right value is ${this.at(rightIndex).data} at index ${rightIndex}`)
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number):void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {
    if (!this.head) console.log('The linked list is empty');
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
    console.log('end of print');
  }
}