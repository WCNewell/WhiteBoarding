// Remove Strings

// Create a function that takes a list of non-negative integers and strings.
// Return a new list with the strings filered out.

let myList = [1,2,3,'a','b','c']

function filterList(list) {
    return list.filter(item => typeof item === 'number')
}

console.log(filterList(myList))
