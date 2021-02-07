/* Create a class for a doubly linked list. 
*/
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node) {
        // Write your code here.
    }

    setTail(node) {
        // Write your code here.
    }

    insertBefore(node, nodeToInsert) {
        // Write your code here.
    }

    insertAfter(node, nodeToInsert) {
        // Write your code here.
    }

    insertAtPosition(position, nodeToInsert) {
        // Write your code here.
    }

    removeNodesWithValue(value) {
        let node = this.head;
        while (node !== null) {
            const nodeToRemove = node;
            node = node.next;
            if (nodeToRemove.value === value) this.remove(nodeToRemove);
        }
    }

    remove(node) {
        if (node === this.head) this.head = this.head.next;
        if (node === this.tail) this.tail = this.tail.prev;
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.prev = null;
        node.next = null;
    }

    containsNodeWithValue(value) {
        let node = this.head;
        while (node !== null) {
            if (node.value === value) return true
            node = node.next;
        }   
        return false;
    }
}