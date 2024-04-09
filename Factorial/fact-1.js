// Write a function that takes a number as input and returns the factorial of that number.
let fact = 1;
function factorial(num) {
    for (let i = 1; i <= num; i++) {
        fact *= i
    }
    return fact;
}
console.log(`Factorial of 5 is`, factorial(5))
