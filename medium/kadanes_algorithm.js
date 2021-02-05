/*
write a function that takes an array of integers and returns the max subarray
subarray must consist of adjacent integers in the input array

ex1: 
let input = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
output = 19 // => [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1]

ex2: 
let input = [3, 4, -10, -3, 5, 14, 1, -5, 4, -6, 1]
output = 20 // => [5, 14, 1]

strategy:
go through array and keep a countSoFar variable, adding each ele to it.
if it dips below 0, reset it to 0
check for each element if the count so far is higher than max
return max 
*/

function kadanesAlgo(arr) {
    let countSoFar = arr[0];
    let max = arr[0];
    if (countSoFar < 0) countSoFar = 0
    for (let i = 1; i < arr.length; i++) {
        countSoFar += arr[i];
        max = Math.max(max, countSoFar);
        if (countSoFar < 0) {
            countSoFar = 0;
        }
    }
    return max
}

let input = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
console.log(kadanesAlgo(input)) // => 19

let input2 = [3, 4, -10, -3, 5, 14, 1, -5, 4, -6, 1]
console.log(kadanesAlgo(input2)) // => 20

let input2 = [-2, -1]
console.log(kadanesAlgo(input2)) // => 20