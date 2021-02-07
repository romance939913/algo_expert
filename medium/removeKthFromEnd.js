/* write a function that takes in the head of a singly linked list and an integer K
and removes the kth node from the end of the list
The removal should be done in place, which means the original data structure should
be mutated
Furthermore, the head node should remain the head node of the linked list after the 
removal is done, even if the head is the node that's supposed to be removed.
In other words, you should mutate the value of the head if the head node is the one
that's supposed to be removed.
function does not need to return anything (can return head)
assume the linked list will always have k nodes

ex1:
let head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 
let k = 4
output = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9

strategy:
keep two pointers, this will allow for only one pass through the list
create pointer first and move k amount into the list.
if first === null, reassign the head to be head.next
create pointer second at head and move both inward until first.next === null 
make second.next = second.next.next

outcome: O(n) and O(1) space
*/

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeKthNodeFromEnd(head, k) {
    let first = head;
    let second = head;
    while (k > 0) {
        first = first.next;
        k--;
    }
    if (first === null) {
        second = second.next;
        return second;
    }
    while (first.next !== null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next
    return head;
}

let head = new LinkedList(0)
head.next = new LinkedList(1)
head.next.next = new LinkedList(2)
head.next.next.next = new LinkedList(3)
head.next.next.next.next = new LinkedList(4)
head.next.next.next.next.next = new LinkedList(5)
head.next.next.next.next.next.next = new LinkedList(6)
head.next.next.next.next.next.next.next = new LinkedList(7)
head.next.next.next.next.next.next.next.next = new LinkedList(8)
head.next.next.next.next.next.next.next.next.next = new LinkedList(9)

console.log(head)
console.log(removeKthNodeFromEnd(head, 4)) // removes 6