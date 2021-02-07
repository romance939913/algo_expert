/* Given an array, return a matrix of the permutations of that array

ex1:
let input = [1, 2, 3]
output = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3 ,1, 2]]

initial strategy: 
for each ele in the array, make it the first element,
gather the rest, keep them in the same order and append to the end of that element
loop through each element (i) in the appended subarray
append a version of arr.slice(i) reversed and not reversed.

[1, 2, 3, 4, 5];
[1].append([5, 4, 3, 2])
[1, 2].append([5, 4, 3])
[1, 2, 3].append([5, 4])

[2].append([1, 3, 4, 5])
[]

scratch that ^^ 


outcome:
*/

function permutations(arr) {
    let perms = [];
    helper(arr, perm=[], perms);
    return perms;
}

function helper(arr, currentPerm, perms) {
    if (arr.length === 0 && currentPerm.length > 0) {
        perms.push(currentPerm);
    } else {
        for (let i = 0; i < arr.length; i++) {
            let newArr = arr.slice(0, i).concat(arr.slice(i + 1));
            let newPerm = currentPerm.concat([arr[i]]);
            helper(newArr, newPerm, perms)
        }
    }
}

console.log(permutations([1, 2, 3]))