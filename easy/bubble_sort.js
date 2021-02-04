/*
Write an array that takes in an array of integers and returns the array sorted
use the bubble sort aogorithm to solve this
*/

function bubbleSort(nums) {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
                sorted = false;
            }
        }
    }
    return nums
}