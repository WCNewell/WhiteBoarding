// FindHighestInterval
// Write a function that finds the highest interval between integers in an integersay
// The integers may be positive or negative

// let integers = [1, 5, -12, -2, 12]

// Result should be 24

// let integers = [5, -25, 15, 1]

// Result should be 40

// let integers = [6, 12, -2, 20]

// Result should be 22

let integers = [1, 5, -12, -2, 12]

// Result should be 24

const highestInterval = integers => {
    let highestInt = null;
    for (let x = 0; x < integers.length; x++) {
        for (let y = x + 1; y < integers.length; y++) {
            if (integers[x] < integers[y] && highestInt < (integers[y] - integers[x])) {
                highestInt = integers[y] - integers[x]
            }
        }
    }
    return highestInt === null ? -1 : highestInt;
}

console.log(highestInterval(integers))