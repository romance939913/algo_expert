/*
Binary Heap: A Binary tree that satisfies a few special properties
- completeness: Every node at the last level is firthest to the left
- Heap property: can either be min heap or max heap. In a min heap, every single node
is greater than its parent node, root is the smallest. vice versa for a max heap.
Heaps are in no way sorted. Those are the only properties it must satisfy^^

Heaps can easily be represented in a conventional Array
ie. [8, 12, 23, 17, 31, 30, 44, 201, 18]
              8
           /     \
          12     23
         /  \   /  \
        17  31 30  44
       /  \
      102 18
currentNode = i
childOne = 2i + 1
childTwo = 2i + 2
parentNode = floor((i - 1) / 2)

create a class for a minHeap with the following methods:
buildHeap, siftDown, siftUp, peek, remove, insert

*/

class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) {

    }

    siftDown() {
        // compare node with both children, replace node with smaller child 
        // until it doesn't have any smaller children
    }

    siftUp() {
        // place node at bottom and move up until its not bigger than parent

    }

    peek() {

    }

    remove() {

    }

    insert(value) {

    }
}