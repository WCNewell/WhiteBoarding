// DNA Matching
// In DNA strings, symbols 'A' and 'T' are complements of each other as are 'C' and 'G'.
// Write a function that given a DNA strand, creates the complementary side

let dna = 'ATTGC'

function DNAStrand(dna) {
    let oppositeArray = []
    let splitString = dna.split('')

    for ( i = 0; i < splitString.length; i++ ) {
        switch(splitString[i]) {
            case 'A': oppositeArray.push('T')
                break
            case 'T': oppositeArray.push('A')
                break
            case 'C': oppositeArray.push('G')
                break
            case 'G': oppositeArray.push('C')
        }
    }
    let oppositeJoinedArray = oppositeArray.join('')
    return oppositeJoinedArray
}

console.log(DNAStrand(dna))

