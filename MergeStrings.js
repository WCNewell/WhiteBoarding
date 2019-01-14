let str1 = 'abc'
let str2 = 'defg'

function mergeStrings(str1, str2) {
    let a = str1.split("").filter(Boolean)
    let b = str2.split("")

    let mergedString = ''

    for ( i = 0; i < a.length || i < b.length; i++ ) {
        if (i < a.length) mergedString += a[i]
        if (i < b.length) mergedString += b[i] 
    }
    return mergedString
}

console.log(mergeStrings(str1, str2))