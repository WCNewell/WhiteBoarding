// ToUpperCase
// Write a function that takes a string and returns the uppercase version of that string wiht an ! at the end

let string = 'Bobbicat says meow'

function uppercase (string) {
    const upperString = string.toUpperCase()
    return `${upperString}!`
}

console.log(uppercase(string))