//With let you can not use the same property twice so let would be better
//we want to throw an error for things like that.
// let name = "Thomas";
// let hobbies;
// let age;
// //var name = 'Edward';
// if (name === "Thomas") {
//   //because hobbies is in an if statement it is a global variable and can be used everywhere
//   //if I change var to let here then on line 14 will throw an error.
//   hobbies = ["Sports", "Cooking"];
//   console.log(hobbies);
// }
// function greet() {
//   let age = 49;
//   let name = "Edward";
//   console.log(name, age, hobbies);
// }
// console.log(name, hobbies);
// greet();

//Turning strict mode on to disable forgiving behavior
// 'use strict';

// const userName = 'Thomas';

// //var undefined = 5;
// console.log(userName);

//Basic program
//function to promp the user to enter a name
// function getName() {
//      return prompt('Enter your name: ', '');
// }
// //function to display a greeting that includes the entered users name
// function greet() {
//      //for the const userName get the value from the first function
//      const userName = getName();
//      console.log('Hello ' + userName);
// }
// //Call the second function
// greet();

const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

let person = { name: 'Thomas'};
//Assigning a new value to the variable person, JavaScript detects this and cleans 
//the "garbage" or objects out of memory, hence the object stored in the person variable
//on line 47
person = null;

function printMessage() {
     const value = messageInput.value;
     console.log(value || 'Clicked me!');
}

function addListener() {
     clickableBtn.addEventListener('click', printMessage);
}
//Created a memory leak below.
// function addListener() {
//      clickableBtn.addEventListener('click', function() {
//           const value = messageInput.value;
//           console.log(value || 'Clicked me!');
//      });
// }

addListenerBtn.addEventListener('click', addListener);

