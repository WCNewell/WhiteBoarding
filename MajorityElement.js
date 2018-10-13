// Majority Element
// Given an array of positive integers containing duplicates, return the majority element in an array, if present.
// A majority element is an element that appears more than n/2 times where n is the size of the array.

let array = [1, 3, 4, 1, 1, 2, 1, 1]

function majorityElement(array) {
    let instances = {};
    for (n of array) {
        instances[n] ? instances[n]++ : instances[n] = 1;
        if (instances[n] >= array.length / 2) return n;
    }
    return -1;
}

console.log(majorityElement(array))