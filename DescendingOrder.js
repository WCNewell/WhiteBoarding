// Descending Order

// Your task is to make a fucntion that can take any non-negative interger as an argument
// Return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number

// Take an integer and re-arrange all digits in descending order from highest to lowest
// This would probably involve a for loop of .map
// First find the highest integer, then the next highest and so forth
// Do this by comparing each subsequent digit to the highest, then the next highest

let num = 24145

function descendingOrder(num) {
    return parseInt(String(num).split('').sort((a, b) => { return b - a }).join(''))
}

console.log(descendingOrder(num))

// Ok, so I was on the wrong track, because I found that parseInt(String) function was the best approach
// along with .split .sort and .join methods
