function countCharacterOccurrences(str) {
    const charCount = {};

    // Loop through each character in the string
    for (let char of str) {
        // If the character already exists in the object, increment its count
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // If it's the first time the character appears, set its count to 1
            charCount[char] = 1;
        }
    }

    // Output the results
    for (let char in charCount) {
        console.log(${char} repeated ${charCount[char]} time(s));
    }
}

// Example usage
const inputString = "raja";
countCharacterOccurrences(inputString);