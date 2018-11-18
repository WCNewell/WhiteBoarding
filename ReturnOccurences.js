// Return Occurences
// Give an array of words, return the number of occurences of the letter 'e'.

let words = ['red','green','blue']

function howManyEs(str) {
    let e = /[e]/gi
    let acc = 0
    for ( let i = 0; i < str.length; i++ ) {
        if ( str[i].match(e) ) {
            acc += 1
        }
    }
    return acc
}

console.log(howManyEs(words))
