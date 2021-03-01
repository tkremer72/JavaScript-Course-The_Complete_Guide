//Using classes and interfaces
// class User {
//   //have to use properties as fields, this makes code easier to read
//   public name: string; //public is usable everywhere
//   private age: number;//private only available in this class

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

interface Greetable {
  name: string;
}
interface Printable {
  print(): void;
}
//Shorter version
class User implements Greetable, Printable {
  constructor(public name: string, private age: number) {}
  print() {
    console.log(this.name)
  }
}
class Admin extends User {
  constructor(name: string, age: number, private permissions: string[]) {
    super(name, age);
  }
}

const user = new User('Thomas', 50);//instantiate a class
console.log(user.name);
//get access to the input elements below is type casting
const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElement = document.querySelector('button');

//Add two numbers

function add(a: number, b: number) {
  return a + b;
}

type PrintMode = 'console' | 'alert';
type ResultType = string | number;
//enums
enum OutputMode { CONSOLE, ALERT }

//Print the result
//literal types, untion types and enums
function printResult(result: ResultType, printMode: OutputMode): void {//makes the intention to not return anything clear, ts will automatically infer this
    if(printMode === OutputMode.CONSOLE) {
        console.log(result);
    } else if (printMode === OutputMode.ALERT) {
      alert(result);
    }
}

//Store two numbers in a result variable or constant

// const result = add(5, 3);

// //Below is just an example showing how typescript infers things

// let isDone = false;

// //Call the function to print the result

// printResult(result);

//interfaces
interface CalculationContainer {
  res: number;
  print(): void;
}

//type aliases
type CalculationResults = /* { res: number, print: () => void } */CalculationContainer[];


const results: CalculationResults = [];//making it clear that in result there is a res property that is a number and a print function that takes no parameters and returns nothing
const names = ["Thomas"];

buttonElement.addEventListener('click', () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer/* : { res: number } */ = {//do not need to do the assignment but did for the example
    res: result,
    print() {
      console.log(this.res);
    }
  };

  results.push(resultContainer);
  //results.push(5);//includes this every time the button is clicked 

  //printResult(results);//log the results array 

 // results[0].print();

 printResult(result, OutputMode.CONSOLE);
 printResult(result, OutputMode.ALERT);
});


