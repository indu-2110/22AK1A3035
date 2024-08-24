function calculateLuckyNumber(dob) {
    // Remove the dashes from the date string and sum the digits
    let sum = dob.replace(/-/g, '')
                .split('')
                .reduce((acc, digit) => acc + parseInt(digit), 0);

    // Reduce the sum to a single digit if necessary
    while (sum > 9) {
        sum = sum.toString().split('')
                   .reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    return sum;
}

