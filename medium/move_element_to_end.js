/*
given an array of integers and an integer, write a function that moves all instances
of that element to the end of the array

ex1:
input1 = [2, 1, 2, 2, 2, 3, 4, 2]
input2 = 2
output = [1, 3, 4, 2, 2, 2, 2, 2] (other elements do not need to remain in order)

ex2:
input1 = [4, 3, 6, 7, 3, 2, 3, 4, 3]
input2 = 3
output = [4, 6, 7, 2, 4, 3, 3, 3, 3]

strategy: keep a pointer at the last misplaced element in the array (ie input1[7])
iterate from the beginning and everytime we hit the given int, swap the two pointers,

*/

function moveToEnd(arr, num) {
    let first = 0
    let last = arr.length - 1;

    while (first < last) {
        while (first < last && arr[last] === num) last--;
        if (arr[first] === num) {
            [arr[last], arr[first]] = [arr[first], arr[last]];
        }
        first ++;
    }
    return arr;
}