/*
given a target amount of money and currency denominations,
determine every way to make the given amount of money

ex1:
input1 = [1, 5, 10, 25];
input2: 10
output: 4 // => [1x10, 2x5, 1x5+5x1, 10x1]

strategy:
create a "ways" array the length of the target change amount filled with 0s
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
each idx representing its exact amount of change
for each demonination, iterate through the ways array determining if the coin fits.
update that idx to its amount += ways[idx - denom]

outcome: 
*/

function makeChange(n, denoms) {
    let ways = new Array(n + 1).fill(0);
    ways[0] = 1;
    denoms.forEach(denom => {
        for (let amt = 1; amt < ways.length; amt++) {
            if (denom < amt) {
                ways[amt] += ways[amt - denom];
            }
        }
    })
    return ways[ways.length - 1];
}