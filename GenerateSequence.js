// Generate Sequence
// Write a function called generateSequence that takes in two arguments
// The first argument will be the length of the array and the second argument is the starting integer

let params = [10, 4]

function generateSequence (length, startingNumber) {
    return Array.from( new Array( length, (startingNumber, i ) => i + startingNumber))
}

console.log(generateSequence(params))