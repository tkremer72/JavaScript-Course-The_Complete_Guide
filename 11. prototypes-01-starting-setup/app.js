// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }
// class Person extends AgedPerson {
//   name = "Thomas";

//   constructor() {
//     super();
//     this.age = 49;
//   }

//   greetPerson() {
//     console.log(
//       "Hello, I am " + this.name + " & I am " + this.age + " years old.",
//       `Hello, I am ${this.name} & I am ${this.age} years old.`
//     );
//   }
// }

//below is a constructor function

// function Person() {
//      this.age = 49;
//      this.name = 'Thomas';
// }

// Person.prototype.greetPerson = function() {
//           console.log(
//                      "Hello, I am " + this.name + " & I am " + this.age + " years old.",
//                      `Hello, I am ${this.name} & I am ${this.age} years old.`
//                    );
//      }
//Code below replaces the original with a new copy
// Person.prototype = {
//      printAge() {
//               console.log(this.age);
//             }
// }

// Person.prototype.printAge = function() {
//      console.log(this.age);
// }

// Person.describe = function() {
//      console.log('Creating persons.....')
// }
// console.dir(Person);

// const p = new Person(); //must use the new keyword for this to work
// p.greetPerson();
// p.printAge();
// console.log(p.length);
// //console.log(p.__proto__);
// console.log(p.toString());
// const p2 = new p.__proto__.constructor();//this is for when you don't have access to the constructor method anymore
// console.dir(Object.prototype.__proto__);

// const p = new Person();
// const p2 = new Person();
// console.log(p, p2)
// console.log(p.__proto__ === p2.__proto__);//they are using the exact same object in me

//Getting and setting prototypes. 