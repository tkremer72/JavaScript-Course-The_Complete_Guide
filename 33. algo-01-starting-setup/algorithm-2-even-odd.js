//Write an algorithm that determines if a number is even or odd
function isEvenOrOdd(number) {
     // const result = number % 2;//for even the remainder will be 0 for odd not 0
     // if(result === 0) {
     //      return 'Even';
     // } else {
     //      return 'Odd';
     // }
     // Do the above in one line with a ternary expression
     return number % 2 ? 'Odd' : 'Even';
}//This code will always run one time which means it has a constant time conplexity and is O(1)

console.log(isEvenOrOdd(10));//result is even
console.log(isEvenOrOdd(11));//result is odd