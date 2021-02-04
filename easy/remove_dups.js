/*
Given a singly linked list whos values are sorted integers
remove duplicates from the list
*/

function removeDups(head) {
    let node = head;
    debugger
    while (!!head.next) {
        if (head.next.value === head.value) {
            let getAllDups = true;
            while (getAllDups) {
                if (head.next.value === head.value) {
                    head.next = head.next.next;
                } else {
                    getAllDups = false;
                }
            }
        } else {
            head = head.next;
        }
    }
}