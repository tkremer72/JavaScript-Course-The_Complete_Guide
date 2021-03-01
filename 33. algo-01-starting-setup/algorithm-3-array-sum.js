//Algorithm to sum up a list of numbers or an array

function sumUp(numbers) {//Time complexity
     let sum = 0;//executes one time
     for(let i =0; i < numbers.length; i++) {//loop through the number, executes n times
          sum += numbers[i];//add each number to the running total
     }
     return sum;//executes one time
}
//Linear time complexity O(n);
const array = [1, 2, 3, 4, 5];

console.log(sumUp(array)); //15