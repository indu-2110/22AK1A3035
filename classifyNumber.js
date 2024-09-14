function classifyNumber(n) {
    if (n <= 0) {
        console.log("Input must be a positive integer.");
        return;
    }

    // Function to find the sum of proper divisors of a number
    function sumOfDivisors(num) {
        let sum = 0;
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                sum += i;
                if (i !== 1 && i !== num / i) {
                    sum += num / i;
                }
            }
        }
        return sum;
    }

    // Calculate the sum of proper divisors
    let sum = sumOfDivisors(n);

    // Determine and print whether the number is abundant, perfect, or deficient
    if (sum > n) {
        console.log(n + " is an Abundant Number.");
    } else if (sum === n) {
        console.log(n + " is a Perfect Number.");
    } else {
        console.log(n + " is a Deficient Number.");
    }
}

// Example usage
const number = 28; // You can change this value to test other numbers
classifyNumber(number);