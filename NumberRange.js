// Number Range
// Given a range of numbers return the range of the numberas from min to max

let numbers = [4, 2, 98, 33, 17]

function numberRange(numbers) {
    return numbers.length === 0 ? "undefined" : `${Math.min(...numbers)}-${Math.max(...numbers)}`
}

console.log(numberRange(numbers))