function multiplyMatrices(A, B) {
    console.log("Matrix A:");
    console.log(A);
    console.log("Matrix B:");
    console.log(B);

    // Initialize result matrix with zeros
    let result = [];
    for (let i = 0; i < A.length; i++) {
        result[i] = [];
        for (let j = 0; j < B[0].length; j++) {
            result[i][j] = 0;
        }
    }

    // Perform matrix multiplication
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B[0].length; j++) {
            for (let k = 0; k < A[0].length; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    console.log("Resultant Matrix:");
    console.log(result);

    return result;
}

// Example usage
const A = [
    [1, 2],
    [3, 4]
];
const B = [
    [5, 6],
    [7, 8]
];

multiplyMatrices(A, B);