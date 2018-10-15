// Convert to URL or "URLify a given string"
// Convert a string into an acceptable URL by converting all spaces into %20
// Side note: URI is Uniform Resource Identifier, a URL (Uniform Resource Locator) is the most common form of URI

const string = 'Mr. Smith goes to Washington'

const string2 = 'Pluto IS a planet'

// Input: string.string.length<10^5
// Output: new string formatted as a URL

// PsuedoCode: Write a for loop to iterate over string (function input)
// Find and replace blank space with '%20'
// Employ: newURL = [] or arr, for loop or .map or .forEach, .split,. .push or .join

// function convertToURL(str) {
//     const arr = str.split('')
//     arr.forEach((x, i) => {
//         if(x === '') {
//             arr[i] = '%20'
//         }
//     })
//     return arr.join('')
// }

function convertToURL(string, target, replacement) {
    for (i = 0; i < string.length, i++;) {
        newString = string.replace(target, replacement)
    }
    return newString
}

console.log(convertToURL(string, ' ', '%20'))

// ^^ still not working, needs more effort ^^




