// Explain the concept of anagram and write a function to check if two strings 
// are anagrams of each other.
let str1 = 'siLent';
let str2 = 'listeN';

function sort(str) {
    let sortedString = str.toLowerCase().split('').sort().join('');
    return sortedString;
}

function areAnagrams(str1, str2) {
    let sortedStr1 = sort(str1);
    let sortedstr2 = sort(str2);
    console.log(sortedStr1, sortedstr2)
    return sortedStr1 === sortedstr2;
}
console.log('The given strings are Anagram:', areAnagrams(str1, str2))