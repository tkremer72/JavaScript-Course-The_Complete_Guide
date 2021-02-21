//Task 1
class Course {
     //Task 5 turn price into a private property.
     #price = 0;

  //Task 4 getters and setters

  get price() {// my getter to return the price
    return "$" + this.#price;
  }

  set price(value) { //My setter to set the price entered by a user.
    if (value < 0) {
      throw "Invalid value!";
    }
    this.#price = value;
  }

  //Part of task 1
  constructor(cTitle, cPrice, cLength) {
    this.title = cTitle;
    //this._price = cPrice; this was task 1 initially
    this.price = cPrice;// this is task 4 initially reaching out to my setter.
    this.length = cLength;
  }
  //Task 2
  calculateCost() {
    return this.length / this.#price;
  }
  printTotal() {
    console.log(
      `Title: ${this.title}, Length: ${this.length}, Price: ${this.price} `
    );
  }
}

const javaScriptCourse = new Course(
  "JavaScript - The complete guide.",
  100,
  63
);
const reactCourse = new Course("React.js - A course about React.js", 75, 48);

//Task 1
console.log(javaScriptCourse);
console.log(reactCourse);

//Task 2
console.log(javaScriptCourse.calculateCost());
console.log(reactCourse.calculateCost());

javaScriptCourse.printTotal();
reactCourse.printTotal();

//Task 3
class PracticalClassCourse extends Course {
  constructor(title, length, price, exerciseCount) {
    super(title, price, length);
    this.numberOfExercises = exerciseCount;
  }
}

const angularCourse = new PracticalClassCourse(
  "Angular - A practical guide to Angular.",
  112,
  150,
  15
);

console.log(angularCourse);
angularCourse.printTotal();

class ProgrammingTheories extends Course {
  publish() {
    console.log("Publishing....");
  }
}

const combinationCourse = new ProgrammingTheories(
  "Combination Programming - Using multiple languages to write programs.",
  350,
  98
);

//Task 4 output
combinationCourse.price = 1000;
//Task 3 output
combinationCourse.printTotal();
combinationCourse.publish();



