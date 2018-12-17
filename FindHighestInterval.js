// FindHighestInterval
// Write a function that finds the highest interval between integers in an array
// The integers may be positive or negative

let integers = [1, 5, -12, -2, 12]

// Result should be 24

const highestInterval = integers => {
    let highestInt = null
    for ( x = 0; x < integers.length; x++ ) {
        for ( y = x + 1; y < integers.length; y++ ) {
            if (integers[x] < integers[y] && highestInt < (integers[y] - integers[x])) {
                highestInt = integers[y] - integers[x]
            }
        }
    }
    return highestInt === null ? -1 : highestInt
}

console.log(highestInterval(integers))