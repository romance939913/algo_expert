/* write a function that takes in an int array where nums represent index jumps
function should return whether or not you every single index in the array creates 
a perfect cycle
a perfect cycle is formed if you touch every array element once before hitting the index
where you started again
jumps that step outside of the array should loop back around

ex1:
let input = [2, 3, 1, -4, -4, 2];
let numElementsSeen = 6
output = true

ex2:
let input1 = [3, 6, -7, 1, 5, 5];
output = false;

strategy:
loop through array and pass each idx to a helper function
Initialize a set that will take in every idx bounced too from the given idx
if the set contains every idx between 0 and arr.length once it reaches the original idx,
then it's a perfect cycle
otherwise if you try to reinsert an already inserted idx, it's not a perfect cycle, return F

new strategy: building a set is unnecessary, if I touch all elements and get back 
to the original idx, then none could've been touched twice, 
it would've never reached the beginning again
*/

function hasSingleCycle(arr) {
    let numElementsSeen = 0;
    let idx = 0;
    while (numElementsSeen < arr.length) {
        if (numElementsSeen > 0 && idx === 0) return false;
        numElementsSeen ++;
        idx = getNewIdx(idx, arr)
    }
    return idx === 0;
}

function getNewIdx(idx, arr) {
    let jump = arr[idx];
    let newIdx = (idx + jump) % arr.length;
    return newIdx >= 0 ? newIdx : newIdx + arr.length;
}