function interchangeFirstAndLastColumns(matrix) {
    let rows = matrix.length;

    // Iterate through each row and swap the first and last columns
    for (let i = 0; i < rows; i++) {
        let temp = matrix[i][0]; // Store the first column element
        matrix[i][0] = matrix[i][matrix[i].length - 1]; // Replace first with last
        matrix[i][matrix[i].length - 1] = temp; // Replace last with first
    }

    return matrix;
}

// Example usage
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Original matrix:");
console.log(matrix);

let updatedMatrix = interchangeFirstAndLastColumns(matrix);

console.log("Matrix after interchanging first and last columns:");
console.log(updatedMatrix);