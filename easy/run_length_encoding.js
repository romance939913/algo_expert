/*
write a function that takes in a non-empty string and returns its runlength encoding

ex1:
input = "AAAAAAAAAAAABBCCCCDD"
output = "9A4A2B4C2D"
*/

function encodeLength(str) {
    let counter = 1;
    let result = [];
    let currentLetter = str[0];

    for (let i = 1; i < str.length; i++) {
        if (str[i] === currentLetter && counter < 9) {
            counter += 1;
        } else {
            result.push(`${counter}${currentLetter}`);
            currentLetter = str[i]
            counter = 1
        }
    }
    result.push(`${counter}${currentLetter}`)
    return result.join("")
}

let input = "AAAAAAAAAAAABBCCCCDD"
console.log(encodeLength(input)) // => "9A4A2B4C2D"