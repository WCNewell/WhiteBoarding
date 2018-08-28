// Remove Smallest
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left.

let numbers = [1, 3, 6, 1, 5]

function removeSmallest(numbers) {
    const smallestNumKEY = 0;
    for (i = 0; i <= numbers.length; i++) {
        if (numbers[i + 1] < numbers[i]) {
            smallestNumKEY = i + 1;
        }
    }
    numbers.splice(smallestNumKEY, 1)
    return numbers
}

console.log(removeSmallest(numbers))

// ^^The above function only works if the integers are in ascending order, below is another solution:

function removeSmallest(numbers) {
    let min = Math.min(...numbers);
    let removed = false;
    return numbers.reduce((accumulator, currentValue) => {
        if (currentValue === min && !removed) removed = true;
        else accumulator.push(currentValue);
        return accumulator;
    }, []);
}

console.log(removeSmallest(numbers))
