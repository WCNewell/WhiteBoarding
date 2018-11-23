// ZipArrays
// Implement a function which takes two parameters, both of which are arrays, and zip them together

let array1 = [1,2,3]
let array2 = [4,5,6]

function zipArrays(array1, array2) {
    let newArray = []
    for (var i = 0; i < array1.length; i++) {
        newArray.push(array1[i], array2[i])
    }
    return newArray
}

console.log(zipArrays(array1, array2))