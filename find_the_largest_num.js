// buat sebuah function yang me-return angka paling besar dari sebuah array of numbers;

function findLargestNum(nums) {
    return Math.max.apply(null, nums)
}

// there are no negative numbers.
console.log(findLargestNum([4, 5, 1, 3])) // 5
console.log(findLargestNum([300, 200, 600, 150])) // 600
console.log(findLargestNum([1000, 1001, 857, 1])) // 1001 