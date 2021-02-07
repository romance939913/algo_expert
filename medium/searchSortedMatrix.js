/* Given a 2-dimensional array of sorted integer arrays, write a function that 
returns the coordinate of the target int, if non-existant return [-1, -1]

note: every single element in the matrix is distinct, the rows and columns are 
sorted and 

ex1:
let matrix = [
    [1,  4,   7,   12,  15,  1000],
    [2,  5,   19,  31,  32,  1001],
    [3,  8,   24,  33,  35,  1002],
    [40, 41,  42,  44,  45,  1003],
    [99, 100, 103, 106, 128, 1004]
];
let target = 44;
output = [3, 3];

strategy:
declare a coordinate in the bottom left corner: matrix[matrix.length - 1][0], 
move to the right if our coordinate is bigger and down if it's smaller
do this until we find the number or our coordinate === undefined

outcome: O(m + n) space O(1)
*/

function searchSortedMatrix(matrix, target) {
    let coord = [matrix.length - 1, 0];
    debugger
    while (!!matrix[coord[0]] && !!matrix[coord[0]][coord[1]]) {
        if (matrix[coord[0]][coord[1]] === target) return [coord[0], coord[1]];
        if (matrix[coord[0]][coord[1]] < target) {
            coord[1] ++;
        } else {
            coord[0] --;
        }
    }
    return [-1, -1]
}

let matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004]
];
console.log(searchSortedMatrix(matrix, 44)) // => [3, 3]
console.log(searchSortedMatrix(matrix, 43)) // => [-1, -1]
console.log(searchSortedMatrix(matrix, 1000)) // => [0, 5]
console.log(searchSortedMatrix(matrix, 4)) // => [0, 1]