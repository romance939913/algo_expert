/*
write a function that takes in an array and returns a bool whether the array is monotonic
monotonic means if the array is strictly increasing or decreasing
*/

function isMonotonic(arr) {
    let increasing = true;
    let decreasing = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) increasing = false;
        if (arr[i] < arr[i + 1]) decreasing = false;
    }
    return increasing || decreasing;
}

let input = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001] // => true