// Given two integers, write a function that swaps them witout
// using any temporary variables

let integers = [2,3]

// Psuedocode: this would be a function that uses the index position of the 
// integer in the array to swap them so 0 becomes 1 and 1 becomes 0. 
// I wonder if a higher order function would work here like reduce or filter
// There could probably also be a method involved like .join or .split

function swap (x,y) {
    x = x + y
    y = x - y
    x = x - y
    return [x,y]   
}

console.log(swap(2,3))

// I was really over thinking it, in fact it could be even more simple:

function swap (x,y) {
    return [y,x]
}

console.log(swap(2,3))