// Write a function that finds the maximum and minimum elements in an array.

function findMaxAndMin(arr) {
    if (arr.length === 0) {
        return { max: null, min: null };
    }
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return { max: max, min: min };
}
let result = findMaxAndMin([7, 4, 6, 1, 10])
console.log('Max value:', result.max)
console.log('Min value:', result.min)