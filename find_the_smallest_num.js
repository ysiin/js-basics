// buat sebuah function yang me-return angka paling kecil dari sebuah array of numbers;

function findSmallestNum(nums) {
    return Math.min.apply(null, nums);
}



console.log(findSmallestNum([34, 15, 88, 2])) // 2
console.log(findSmallestNum([34, -345, -1, 100])) // -345
console.log(findSmallestNum([-76, 1.345, 1, 0])) // -76
console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999])) // -0.9999
console.log(findSmallestNum([7, 7, 7])) // 7