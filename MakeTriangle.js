// Make Triangle
// Write a function that takes 3 lengths
// Determine if these 3 lengths can make a triangle
// If they can make a triangle return true, else return false

// Thought process / PsuedoCode: This is based on the Pythagorean Theorum
// Given 3 lengths, check to see if length a squared plus b squared = c squared
// Also check if a squared plus c squared equals b squared
// Also check if b squared plus c squared equals a squared
// This could be a for loop that takes three arguments, and loops through a if/else statements for all tests, returns true or false

let a = 1
let b = 2
let c = 3

function makeTriangle (a, b, c) {
    if ( a+b>c && b+c>a && a+c>b ) {
        return true
    }
    else {
        return false
    }
}

console.log(makeTriangle(a, b, c))

// Ok, so this can be simplified by remembering that the sum of any 2 lengths of a triangle is greater
// than the length of the 3rd side if you take the three sides and add them in pairs,
// the sum is greater than (not equal to) the 3rd side.
// AND remember the Pythagorean Theorum only works on right triangles.
