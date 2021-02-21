//Create a pure function without side effects
function add(num1, num2) {
  return num1 + num2;
} //No matter how often we reload the page, the results never change
console.log(add(1, 5));
console.log(add(12, 15));

//Create an impure function
function addRandom(num1) {
  return num1 + Math.random();
} //No matter how many times we reload, the result will never be the same
console.log(addRandom(23));

//Any function that returns something outside of the function that isn't expected
let previousResult = 0;
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum; //changing the variable creates the side effect.
  return sum;
} //this function isn't pure because it creates a side effect.
console.log(addMoreNumbers(1, 5));

//The function below is impure because we have a side effect.
const hobbies = ["Sports", "Cooking", "Hunting"]; //global variables created outside of the function can be used globally
function printHobbies(h) {
  h.push("NEW HOBBY"); //By changing the object in memory we change the array so this is impure
  console.log(h);
}
printHobbies(hobbies);

//Factory functions
function createTaxCalculator(tax) {
  //variables defined inside of a function can be used in the function but not outside of it, this is scoping
  function calculateTax(amount /* , tax */) {
    console.log(multiplier);
    console.log(tax);
    return amount * tax * multiplier;
  }
  return calculateTax;
}
// const valTaxAmount = calculateTax(100, 0.19);
// const incomeTax = calculateTax(100, 0.27);
const calculateValueTaxAmount = createTaxCalculator(0.19); //configure the tax amount ahead of time
const calculateIncomeTaxAmount = createTaxCalculator(0.27);

multiplier = 1.2;
//using preconfiguration to make things easier then use factory functions to save time and code
console.log(calculateValueTaxAmount(100));
console.log(calculateIncomeTaxAmount(200));

//Closures
let userName = "Thomas";
function greetUser() {
  //let name = 'Anna';//variable created inside of the function, takes precidence.
  console.log("Hi " + name);
}
let name = "AnnaBoBanna"; //variable created outside of the function, the next in line if one isn't found inside the function
userName = "Edward"; //changes the variable userName to edward
greetUser();

//Recursion
//function before recursion below
// function powerOf(x, n) {
//      let result = 1;
//      for(let i = 0; i < n; i++) {
//           result *= x;
//      }
//      return result;
// }
//function after recursion below
function powerOf(x, n) {
  //without the if check, it creates an infinite loop
  // if(n === 1) {
  //      return x;
  // }
  // return x * powerOf(x, n - 1);
  //Above is short but we can go shorter, we can return a ternary expression
  return n === 1 ? x : x * powerOf(x, n - 1);
  //the above code says that if n is equal to one 'n === 1' and '?', if it is we return x
  //otherwise ':' we perform this operation --> x * powerOf(x, n - 1);
}
console.log(powerOf(2, 3)); // 2 * 2 * 2
console.log(powerOf(6, 3)); // 6 * 6 * 6

//Advanced Recursion
//For this object below a for loop won't work
const myself = {
  name: "Thomas",
  friends: [
       {
            name: 'Renee',
            friends: [
                 {
                      name: 'Vivian'
                 },
                 {
                      name: 'Sylvia'
                 },
                 {
                      name: 'Becky'
                 }
            ]
       },
       {
            name: 'Bryan',
            friends: [
                 {
                      name: 'Kelly'
                 },
                 {
                      name: 'Dennis'
                 },
                 {
                      name: 'Charles'
                 }
            ]
       },
       {
            name: 'Nathan',
            friends: [
                 {
                      name: 'Warren'
                 },
                 {
                      name: 'Brian'
                 },
                 {
                      name: 'Alan'
                 }
            ]
       }
  ]
};

function getFriendNames(person) {
  const collectedNames = [];
  if (!person.friends) {
    return []; //we return if there are no friends
  }
  for (const friend of person.friends) {
    // collectedNames.push(friend.name);this gets all of my friend names
    collectedNames.push(friend.name); //get all friend names and add to the list of friends
    collectedNames.push(...getFriendNames(friend)); //get all friends of friends and add to the list of friends
  } //use the spread operator above to add the friends of friends to the array but not nest it in the array
  return collectedNames;
}
console.log(getFriendNames(myself));
