function findClosestToZeroSum(arr) {
    if (arr.length < 2) return "Array needs at least two elements.";

    let closestSum = Infinity, pair = [];

    // Compare every pair of elements
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];

            // Update closest sum and pair if needed
            if (Math.abs(sum) < Math.abs(closestSum)) {
                closestSum = sum;
                pair = [arr[i], arr[j]];
            }
        }
    }

    return ${pair[0]} + ${pair[1]} = ${closestSum};
}

// Example usage
const array = [1, 5, 3, 2, 4];
console.log(findClosestToZeroSum(array));