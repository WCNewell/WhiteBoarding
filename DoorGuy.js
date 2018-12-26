// Door Guy
// Takes an array of years and returns an array of booleans stating whether or not a person is of legal drinking age

let years = [2001, 1973, 1981, 1991, 2014]

function canDrink(yearsArray) {
    let results = []
    for (i = 0; i < yearsArray.length; i++) {
        let age = 2018 - yearsArray[i]
        if (age >= 21) {
            results.push(true)
        } else {
            results.push(false)
        }
    }
    return results
}

console.log(canDrink(years))
