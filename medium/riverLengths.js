/* You are given a two dimensional array of potentially unequal height/width 
containing only 0s and 1s. Each 0 represents land and each 1 represents part of
a river. Rivers can only be horizontally or vertically connected. 
Write a function that returns an array of the sizes of all rivers represented in
the input matrix

ex1:
let input = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
]
output = [1, 2, 2, 2, 5];

strategy:
create a coordinate variable starting at [0, 0] which will iterate through the 
entire matrix
if it detects a river, enter coordinate and matrix into a helper method that will 
collect every neighboring 1 and turn it into 0, simultaneously increasing the length
of the currentRiver length,
Once it's gathered every neighboring 1 and flipped it, push the currentRiver into
the result array

outcome: Time O(hw) Space O(hw)
*/

var riverLengths = function(matrix) {
  const result = [];
  let riverLen = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        flipRiver(i, j);
        result.push(riverLen);
        riverLen = 0;
      }      
    }
  }

  function flipRiver(row, col) {
    matrix[row][col] = 0;
    riverLen += 1;
    if (matrix[row][col + 1] === 1) {
      flipRiver(row, col + 1) // call on right
    } if (matrix[row][col - 1] === 1) {
      flipRiver(row, col - 1) // call on left
    } if (!!matrix[row + 1] && matrix[row + 1][col] === 1) {
      flipRiver(row + 1, col) // call on up
    } if (!!matrix[row - 1] && matrix[row - 1][col] === 1) {
      flipRiver(row - 1, col) // call on down
    }
    return null;
  }
  return result;
}

let input = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
];
let input1 = [
  [1, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 1]
];
console.log(riverLengths(input)) // => [1, 2, 2, 2, 5]
console.log(riverLengths(input1)) // => [1, 1, 1, 1, 7, 1, 1, 1, 1]

