//Data structure is anything that stores data

const age = [30, 29, 56, 50, 19];

//Push adds an item in the end of the array
age.push(75); //=> Time Complexity: O(1)

age.unshift(10); //=> Time Comlexity O(n)
//unshift adds an item at the beginning of an array

const myAge = age[4]; //Constant time complexity O(1)
//accessing the index of age array at position 4
console.log(myAge);

//New example
const namePopularity = [
  { userName: "Thomas", usages: 5 },
  { userName: "Jim", usages: 7 },
];

//get the usages of jim
const jimUsages = namePopularity.find((person) => person.userName === "Jim")
  .usages;
console.log(jimUsages);
//Best case: Constant time complexity O(1);
//Worst case: Linear time complexity O(n);
//Average case: Linear time complexity O(n);

//Better case for the namePopularity algorithm
const nameMap = {
     'Thomas': 5,
     'Jim': 7
};
const jimUsages2 = nameMap['Jim'];
console.log(jimUsages2);//Always has a constant time complexity O(1);

