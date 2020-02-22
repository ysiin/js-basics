// Write a function that could receive a number as parameter.The function should convert the parameter to binary number.Then, find the highest gap(zeros that between number 1) in one binary number.Return the highest gap of the binary number.

// Example 1:
// Input: 9
// Output: 2

// Why ?
//   The binary number of 9 is 1001. And there's two zero (gap) between them. So the output is 2

// Example 2:
// Input: 529
// Output: 4

// Why ?
//   The binary number of 529 is 1000010001. There are two gap, one is 4 and one is 3. The highest gap of them all is 4, therefore the output is 4.

// Example 3:
// Input: 20
// Output: 1

// Why ?
//   The binary number of 20 is 10100. There are only one gap, and it is 1. Therefore, the output is 1.

// Example 4:
// Input: 15
// Output: 0

// Why ?
//   The binary number of 15 is 1111. There is 0 gap.Therefore, the output is 0.


// Hint: To convert a number to binary number, you can use method toString(2)
// Example:

// var number = 9
// var numberToBinary = number.toString(2)

// console.log(numberToBinary)// output: 1001

function countTheGap(num){
    let binary = num.toString(2)
    let gap = 0 
    let longestgap = 0
    for(i = 0; i < binary.length; i++) {
        if (binary[i] === "0" ) {
            gap += 1
        } else {
           if (gap > longestgap) {
               longestgap = gap
           }

           gap = 0
        }

    }
     return longestgap
}

console.log(countTheGap(9)) // Output: 2
console.log(countTheGap(529)) // Output: 4
console.log(countTheGap(20)) // Output: 1
console.log(countTheGap(15)) // Output: 0