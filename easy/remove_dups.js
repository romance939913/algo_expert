/*
Given a singly linked list whos values are sorted integers
remove duplicates from the list
*/

function removeDups(head) {
    let currentNode = head;
    while (!!currentNode) {
        let nextDistinctNode = currentNode.next;
        while (!!nextDistinctNode && nextDistinctNode.value === currentNode.value) {
            nextDistinctNode = nextDistinctNode.next;
        }
        currentNode.next = nextDistinctNode; // reassign pointers once distinct is found
        currentNode = nextDistinctNode // reassign for iteration
    }
    return head
}