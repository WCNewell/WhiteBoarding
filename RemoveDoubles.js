// RemoveDoubles
// I had an interview coding challenge from Hackerrank where I had to find the number of consecutive double letters in an array of words
// Furthermore, if there was a consecutive double letter, one of the letters would need to be replaced
// Then the result would be an array of the number of times consecutive double letters needed to be fixed
// e.g. the word 'acccd' would result in '1' because only one letter would need to be fixed.
// This is definitely a challenge solve!
// For now I am studying the below function that simply removes any duplicate letters from a string:

let string = 'anaconda'

function removeDoubles(string) {
    let mapping = {}
    let newString = ''

    for (i = 0; i < string.length; i++) {
        if (!(string[i] in mapping)) {
            newString += string[i]
            mapping[string[i]] = true
        }
    }
    return newString
}

console.log(removeDoubles(string))



// function countDoubles(str) {
//     var counts = {};
//     for (var i = 0, prevChar = null; i < str.length; i++) {
//         var char = str.charAt(i);
//         if (counts.hasOwnProperty(char) && char === prevChar) {
//             counts[char] = counts[char] + 1;
//         } else if (!counts.hasOwnProperty(char)) {
//             counts[char] = 0;
//         }
//         prevChar = char;
//     }
//     var res = [];
//     for (var char in counts) {
//         if (counts.hasOwnProperty(char)) {
//             res.push([char, counts[char]]);
//         }
//     }
//     return res;
// }


// console.log(countDoubles(words))