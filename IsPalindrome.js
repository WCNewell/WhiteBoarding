// Is Palindrome?
// Write a function that takes a string and returns a boolean indicating whether a string is a palindrome.
// A palindrome is a string that is the same backwards and forwards.
// For example: 'hello' should return false and 'tacocat' should return true.

let string1 = 'hello'
let string2 = 'tacocat'

function isPalindrome(input) {
    return input.split('').reverse().join('') === input
}

console.log(isPalindrome(string1))
console.log(isPalindrome(string2))