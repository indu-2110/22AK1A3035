function subtractMatrices(A, B) {
    console.log("Matrix A:");
    console.log(A);
    console.log("Matrix B:");
    console.log(B);
    
    let result = [];
    for (let i = 0; i < A.length; i++) {
        result[i] = [];
        for (let j = 0; j < A[0].length; j++) {
            result[i][j] = A[i][j] - B[i][j];
        }
    }
    
    console.log("Resultant Matrix (A - B):");
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

subtractMatrices(A, B);