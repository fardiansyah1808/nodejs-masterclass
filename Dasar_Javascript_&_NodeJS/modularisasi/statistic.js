// Returns the sum of all elements in an array.
function sum(nums) {
    return nums.reduce((acc, cur) => acc + cur, 0);
}

// Returns the average of all elements in an array.
function average(nums) {
    return sum(nums) / nums.length;
}

// Returns the median of an array of numbers.
export function median(nums) {
    // Copy to avoid modifying the original array.
    const sorted = [...nums].sort((a, b) => a - b);
    const midIndex = Math.floor(sorted.length / 2);

    return isEven(sorted.length) ?
        (sorted[midIndex - 1] + sorted[midIndex]) / 2 :
        sorted[midIndex];
}

// Checks if a given number is even.
function isEven(n) {
    return n % 2 === 0;
}

export { average };