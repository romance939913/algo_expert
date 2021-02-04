/*
Write a function that returns the two elements closest to each other in tow arrays
function takes in two non-empty arrays of integers 

ex1
input1 = [-1, 5, 10, 20, 28, 3]
input1 = [26, 134, 135, 15, 17]
output = [26, 28]

ex2
input1 = [6, 40, 14, 250, 188, 50] =>>> sorted [6, 14, 40, 50, 188, 250]
input1 = [20, 1, 18, 75, 33, 100] =>> sorted [1, 18, 20, 33, 75, 100]
output = [14, 18]

strategy: sort both arrays and initialize two pointers at both 0 indices
compare the absolute value difference, if it's smaller than the current pair then reassign
increment whichever pointer's value is smaller
iterate until the one of the pointers exceeds it's array's length
*/

function smallestDiff(arr1, arr2) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    let one = 0;
    let two = 0;
    let result = [];
    while (arr1[one] !== undefined && arr2[two] !== undefined) {
        if (!result[0] || Math.abs(arr1[one] - arr2[two]) < Math.abs(result[0] - result[1])) {
            result = [arr1[one], arr2[two]];
        }
        if (arr1[one] > arr2[two]) {
            two ++
        } else {
            one ++
        }
    }
    return result;
}

let input1 = [10, 0, 20, 25]
let input2 = [1005, 1006, 1014, 1032, 1031]
console.log(smallestDiff(input1, input2)) // => [25, 1005]