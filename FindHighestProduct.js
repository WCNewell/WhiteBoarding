// FindHighesProduct
// Write a function that finds the highest product of three numbers in an array

let integers = [1, 5, -12, -2, 12]

// expected result = 24

const findHighestInterval = (integers) => {
    let maxProduct = 0;
    for (let i = 0; i < integers.length - 2; i++) {
        for (let j = i + 1; j < integers.length - 1; j++) {
            for (let k = j + 1; k < integers.length; k++) {
                let product = integers[i] * integers[j] * integers[k];
                if (product > maxProduct) {
                    maxProduct = product;
                }
            }
        }
    }
    return maxProduct;
}

console.log(findHighestInterval(integers))
