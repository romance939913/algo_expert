/*
Write a function that takes in an array of at least three integers
without sorting the array, return a sorted aray of the three largest integers

questions: 

strategy: keep a result variable that acts like a queue.
initialize with three values at negative infinity
iterate through nums, if a value is greater than the 3rd place number, 
eject the 3rd place number, replace it with the current iteration and sort()

Outcome:
*/

function findThreeLargest(nums) {
    let result = [-Infinity, -Infinity, -Infinity];

    for (let i = 0; i < nums.length; i++) {
        updateLargest(nums[i], result)
    }
    return result;
}

function updateLargest(num, result) {
    if (num > result[2]) {
        let ghost = result[1];
        result[1] = result[2];
        result[0] = ghost;
        result[2] = num;
    } else if (num > result[1]) {
        result[0] = result[1];
        result[1] = num;
    } else if (num > result[0]) {
        result[0] = num;
    }
}

const input = [141, 2, 17, -7, -17, -27, 18, 541, 8, 7];
console.log(findThreeLargest(input)) // => [18, 141, 541]