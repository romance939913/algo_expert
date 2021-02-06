/*
find the largest sum you can make of non adjacent elements in the input int array

ex1:
input = [7, 10, 12, 7, 9, 14];
outcome = 33 // => 7 + 12 + 14

strategy: 
use dynamic programming.
Save the answers up to each current point as we're building an array the same length
as the input
array building[7, 10, 19, 19, 28, 33]
array building[7, 10, 19, 19, 28, (19 + 14)]


outcome:
*/

function maxNonAdjacent(arr) {
    if (arr.length === 1) return arr[0];
    if (arr.length === 0) return 0;
    let prev = arr[0];
    let first = Math.max(arr[1], arr[0]);

    for (let i = 2; i < arr.length; i++) {
        const current = Math.max(first, prev + arr[i])
        prev = first;
        first = current;
    }
    return first;
}

console.log(maxNonAdjacent([7, 10, 12, 7, 9, 14])) // => 33
console.log(maxNonAdjacent([7, 20, 12, 5, 10, 14])) // => 39