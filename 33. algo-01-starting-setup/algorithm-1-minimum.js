//Algorithms Basics Example Get The Minimum Number

function getMinimum(numbers) {
  if (!numbers.length) {
    //Check to see if there are any numbers in the array
    throw new Error("Should not be an empty array!"); //Throw an error if this check is truthy
  } //executes once
  // if(numbers.length === 1) {//Check to see if there is only one number in the array
  //      return numbers[0];//Returns the only number in the array if this is truthy
  // }This check is redundant

  let currentMinimum = numbers[0]; //Initialize currentMinimum with the first item in the array, executes once
  //console.log("EXECUTION - INIT");
  for (let i = 1; i < numbers.length; i++) {
    //Go through the array until no longer in the bounderies of the array
    //console.log("EXECUTION - FOR");
    if (numbers[i] < currentMinimum) {
      //line 14 executes once, the if check for an array of three items executes twice
      currentMinimum = numbers[i]; //how often this line executes depends it can be 0 to 2 times
    }
  }
  //console.log("EXECUTION - RETURN");
  return currentMinimum; //executes once
}

//time = n => Linear time complexity O(n) big o notation

//Try to implement the above better
function getMinimum2(numbers) {
  if (!numbers.length) {
    //Check to see if there are any numbers in the array, executes once
    throw new Error("Should not be an empty array!"); //Throw an error if this check is truthy
  }//Runs once

  //Create a loop that sorts the algorithm for me
  for (let i = 0; i < numbers.length; i++) {
    let outerElement = numbers[i];//n times

    for (let j = i + 1; j < numbers.length; j++) {
      let innerElement = numbers[j];//n times
      if (outerElement > innerElement) {
        //Swap

        numbers[i] = innerElement;
        numbers[j] = outerElement; //after first iteration [1, 3, 2]

        outerElement = numbers[i]; // =>1
        innerElement = numbers[j]; // =>3

      }
    }
  }
  return numbers[0];//Runs once
}
//Time complexity for the second function => n*n => O(n^2) this is quadratic
//The linear function is better.
const testNumbers = [3, 1, 2];

const minimum = getMinimum(testNumbers);
const minimum2 = getMinimum2(testNumbers);

console.log(minimum); //Should be 1
console.log(minimum2);
