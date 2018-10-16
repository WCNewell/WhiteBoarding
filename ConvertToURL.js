// Convert to URL or "URLify a given string"
// Convert a string into an acceptable URL by converting all spaces into %20
// Side note: URI is Uniform Resource Identifier, a URL (Uniform Resource Locator) is the most common form of URI

var newStr = 'Mr. Smith goes to Washington'

var newNewStr = 'Pluto IS a planet'

// Input: string.string.length<10^5
// Output: new string formatted as a URL

// PsuedoCode: Write a for loop to iterate over string (function input)
// Find and replace blank space with '%20'
// Employ: newURL = [] or arr, for loop or .map or .forEach, .split,. .push or .join


function convertToUrl(string, target, replacement) {
    var i = 0,
        length = string.length;
    for (i; i < length; i++) {
        string = string.replace(target, replacement);
    }
    return string;
}

console.log(convertToUrl(newNewStr, " ", "%20"));



