//Library land
const uid = Symbol("uid"); //Using symbol allows the developer to know and use the id property but not the user.
console.log(uid); //above you don't have to add the identifier but you can.

const user = {
  //id: 'p1',
  [uid]: "p1",
  name: "Thomas",
  age: 49,
  [Symbol.toStringTag]: "User", //Change the tag that is part of the default output
};
//Developer can change this symbol
user[uid] = "p99";
//app land => Using the library
user.id = "p2"; //This should not be possible
console.log(user[Symbol("uid")]); //Shows undefined
console.log(Symbol("uid") === Symbol("uid")); //Shows false
console.log(user); //Shows the user object
console.log(user.toString()); //Not useful in this case however the .toString() is helpful in other areas

//Iterators
//Create our own method that allows us to loop through a specific field of this object
//Thus creating a loopable object
const company = {
  //currentEmployee: 0,
  employees: ["Thomas", "Adam", "Brian", "Amanda"],
  // next() {
  //      if(this.currentEmployee >= this.employees.length) {
  //           return { value: this.currentEmployee, done: true }
  //      }
  //      const returnValue = { value: this.employees[this.currentEmployee], done: false }
  //      this.currentEmployee++;
  //      return returnValue;
  // },//below is using a generator to build an iterator object
  [Symbol.iterator /* getEmployee */]: function* employeeGenerator() {
    // let employee = company.next();

    // while(!employee.done) {
    //      //console.log(employee.value);
    //      yield employee.value;
    //      employee = company.next();
    // }
    //another less confusing way to do the above is below
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++; //increment the current employee by one
    }
  },
};
//A method we can call multiple times and return a different result until we are done.
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

//Dynamic loop that will go through my own iterator object
// let employee = company.next();

// while(!employee.done) {
//      console.log(employee.value);
//      employee = company.next();
// }

for (const employee of company) {
  //Returns an iterator as long as done is not true
  console.log(employee);
} //This works with the [Symbol.iterator] function* employeeGenerator(){} function
console.log([...company]);
//Create a constant to store the value of the employee
// const iterator = company.getEmployee();
// //log each employee in the loop, generator logic doing its work
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

const persons = ["Beans", "Franks", "Weenies"];
console.log(persons);

// REFLECT API Can be used to set properties that can't be 
//changed for example if you were creating a library for people to work with.
//Bundles all features that are needed to work with objects
const course = {
  title: "JavaScript - The Complete Guide",
};
Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});
//Reflect.deleteProperty(course, 'title');
console.log(course);
console.log(course.toString());


//PROXY API 
//The traps are generic and flexable unlike traditional getters and setters.
const courseHandler = {//set the trap for getting values
     get(object, propertyName) {
          if(propertyName === 'length') {
               return 0;
          }
          console.log('I am coming from the course handler function ' + propertyName);
          return object[propertyName] || 'Not Found!';//you can hard override the return
     },
     set(object, propertyName, newValue) {//trap for setting values
          console.log('Sending data..... ')
          if(propertyName === 'rating') {//block access for property name of rating
               return;
          }
          object[propertyName] = newValue;
     }
};
const proxyCourse = new Proxy(course, courseHandler);
proxyCourse.rating = 5;
console.log(proxyCourse.title, proxyCourse.length, proxyCourse.rating);
console.log(course, proxyCourse);
