//Task 1
const numbers = [1, 2, 3, 4, 5, 6];

const numsGreater5 = numbers.filter(val =>  val > 5);

console.log(numsGreater5);

const mappedNums = numbers.map(val => ({num: val}));
console.log(mappedNums);

const multiplication = numbers.reduce((curResult, curValue) => 
      curResult * curValue, 1);
console.log(multiplication);

//Task 2
//rest operator here
function findMax(...nums) {
     let curMax = nums[0];
     for(const num of nums) {
          if(num > curMax) {
               curMax = num;
          }
     }
     return curMax;
}
//spread operator here.
console.log(findMax(...numbers));

//Task 3
function findMinMax(...nums) {
     let curMax = nums[0];
     let curMin = nums[0];
     for(const num of nums) {
          if(num > curMax) {
               curMax = num;
          }
          if(num < curMin) {
               curMin = num;
          }
     }
     return [curMin, curMax];
}
const [min, max] = findMinMax(...numbers);

console.log(min, max);

//Task 4

const userIds = new Set();
userIds.add(-5);
userIds.add(10);
userIds.add(4);

console.log(userIds);