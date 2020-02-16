// 3. buat function untuk mencari index dari sebuah array;
// keyword google "Javascript array findIndex"
// atau gunakan loops dan buat kondisi untuk mendapatkan indexnya.

/* NB: 
jika tidak menemukan indexnya return -1
*/

function findIndex(nums, num) {
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === num) {
            return i
        }
    }
    return -1
}

console.log(findIndex([1, 5, 3], 5))// 1
console.log(findIndex([9, 8, 3], 3))// 2
console.log(findIndex([1, 2, 3], 4))// -1