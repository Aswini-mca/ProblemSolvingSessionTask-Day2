function areAnagrams(str1, str2) {
    // Convert both strings to lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Check if the lengths of the strings are different
    if (str1.length !== str2.length) {
        return false;
    }

    // Convert strings to arrays of characters
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < str1.length; i++) {
        arr1.push(str1.charAt(i));
        arr2.push(str2.charAt(i));
    }

    // Sort the arrays manually (e.g., using bubble sort)
    for (let i = 0; i < arr1.length - 1; i++) {
        for (let j = 0; j < arr1.length - i - 1; j++) {
            if (arr1[j] > arr1[j + 1]) {
                let temp = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = temp;
            }
            if (arr2[j] > arr2[j + 1]) {
                let temp = arr2[j];
                arr2[j] = arr2[j + 1];
                arr2[j + 1] = temp;
            }
        }
    }

    // Check if the sorted arrays are equal
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // If all characters are the same, return true
    return true;
}

// Example usage:
let str1 = 'siLent';
let str2 = 'listeN';
console.log('The given strings are Anagram:', areAnagrams(str1, str2)); // Output: true
