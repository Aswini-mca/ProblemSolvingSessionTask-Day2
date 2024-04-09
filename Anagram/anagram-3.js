function areAnagrams(str1, str2) {
    // Convert strings to lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Check if the lengths of the strings are different
    if (str1.length !== str2.length) {
        return false;
    }

    // Initialize an empty object to store character frequencies
    const charCount = {};

    // Iterate over the first string and count character frequencies
    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate over the second string and decrement character frequencies
    for (let char of str2) {
        if (!charCount[char]) {
            // If a character in str2 is not found in charCount or its count is 0,
            // it means str2 has an extra character not present in str1
            return false;
        }
        charCount[char]--;
    }

    // Check if all character counts are zero
    for (let count of Object.values(charCount)) {
        if (count !== 0) {
            return false;
        }
    }

    // If all characters match in frequency, return true
    return true;
}

// Example usage:
let str1 = 'siLent';
let str2 = 'listeN';
console.log('The given strings are Anagram:', areAnagrams(str1, str2)); // Output: true
