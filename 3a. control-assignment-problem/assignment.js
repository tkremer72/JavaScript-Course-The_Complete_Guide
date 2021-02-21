const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
//Task number 1, else is not required but added
if (randomNumber >= 0.7) {
  alert("Greater or equal than 0.7!");
} else {
  alert("Not greater than 0.7");
}
//Task number 2, three different loops. Only 2 were required.
const numbers = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const num of numbers) {
  console.log(num);
}

let counter = 0;
while (counter < numbers.length) {
  console.log(numbers[counter]);
  counter++;
}

//Task number 3, adjust one of the above loops to count backwards.
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}
//Task number 4 create another random number and show two alerts.

const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)
console.log(randomNumber);
console.log(randomNumber2);
if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber <= 0.2 ||
  randomNumber2 <= 0.2
) {
  alert("Greater than 0.7 or smaller than 0.2!");
}
