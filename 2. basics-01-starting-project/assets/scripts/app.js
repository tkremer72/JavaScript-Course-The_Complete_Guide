//const never changes
const defaultTotal = 0;

//let can change
let currentTotal = defaultTotal;

//set an empty array to store button clicks
let logCalculationEntries = [];

//Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Generates and displays calculation log
function generateAndDisplay(operator, resultPriorToCalc, calculationNumber) {
  const calculatorDescription = `${resultPriorToCalc} ${operator} ${calculationNumber}`;
  outputResult(
    currentTotal,
    calculatorDescription //From vendor file
  );
}

//Create an output log
function generateLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    method: operationIdentifier,
    prevResult: prevResult,
    theInput: operationNumber,
    totalResult: newResult,
  };
  logCalculationEntries.push(logEntry);

  console.log(logCalculationEntries);
}

function calculateTotal(calculationType) {
  //Use conditional code execution
  const inputtedNumber = getUserNumberInput();
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
      !inputtedNumber //treats 0 as falsy
  ) {
    return; //returns no executable code
  }
  // if (
  //   calculationType === "ADD" ||
  //   calculationType === "SUBTRACT" ||
  //   calculationType === "MULTIPLY" ||
  //   calculationType === "DIVIDE"
  // ) {
  const startingResult = currentTotal;
  //Create a variable to hold the operator information
  let mathOperand;
  if (calculationType === "ADD") {
    currentTotal += inputtedNumber;
    mathOperand = "+";
  } else if (calculationType === "SUBTRACT") {
    currentTotal -= inputtedNumber;
    mathOperand = "-";
  } else if (calculationType === "MULTIPLY") {
    currentTotal *= inputtedNumber;
    mathOperand = "*";
  } else if (calculationType === "DIVIDE") {
    currentTotal /= inputtedNumber;
    mathOperand = "/";
  }

  generateAndDisplay(mathOperand, startingResult, inputtedNumber);
  generateLog(calculationType, startingResult, inputtedNumber, currentTotal);
  // }
}

//Adds values entered
// function add() {
//   // const inputtedNumber = getUserNumberInput();
//   // const startingResult = currentTotal;
//   // currentTotal += inputtedNumber;
//   // generateAndDisplay("+", startingResult, inputtedNumber);
//   // generateLog("ADD", startingResult, inputtedNumber, currentTotal);
//   calculateTotal("ADD");
// }

// // //Subtracts values entered
// function subtract() {
//   // const inputtedNumber = getUserNumberInput();
//   // const startingResult = currentTotal;
//   // currentTotal -= inputtedNumber;
//   // generateAndDisplay("-", startingResult, inputtedNumber);
//   // generateLog("SUBTRACT", startingResult, inputtedNumber, currentTotal);
//   calculateTotal("SUBTRACT");
// }

// //Multiplies values entered
// function multiply() {
//   // const inputtedNumber = getUserNumberInput();
//   // const startingResult = currentTotal;
//   // currentTotal *= inputtedNumber;
//   // generateAndDisplay("*", startingResult, inputtedNumber);
//   // generateLog("MULTIPLY", startingResult, inputtedNumber, currentTotal);
//   calculateTotal("MULTIPLY");
// }

// //Divides values entered
// function divide() {
//   // const inputtedNumber = getUserNumberInput();
//   // const startingResult = currentTotal;
//   // currentTotal /= inputtedNumber;
//   // generateAndDisplay("/", startingResult, inputtedNumber);
//   // generateLog("DIVIDE", startingResult, inputtedNumber, currentTotal);
//   calculateTotal("DIVIDE");
// }
//Combining with bind()

function calculate(operation) {
  const inputtedNumber = getUserNumberInput();
  const startingResult = currentTotal;
  let operator;
  if(operation === 'ADD') {
    currentTotal += inputtedNumber;
    operator = "+"
 /*  generateAndDisplay("+", startingResult, inputtedNumber);
  generateLog("ADD", startingResult, inputtedNumber, currentTotal); */
  } else if(operation === 'SUBTRACT') {
    currentTotal -= inputtedNumber;
    operator = '-';
/*    generateAndDisplay("-", startingResult, inputtedNumber);
   generateLog("SUBTRACT", startingResult, inputtedNumber, currentTotal); */
  } else if(operation === 'MULTIPLY') {
    currentTotal *= inputtedNumber;
    operator = '*';
    /* generateAndDisplay('*', startingResult, inputtedNumber);
    generateLog("MULTIPLY", startingResult, inputtedNumber, currentTotal); */
  } else  {
    currentTotal /= inputtedNumber;
    operator = '/';
   
  } 
   generateAndDisplay(operator, startingResult, inputtedNumber);
    generateLog(operation, startingResult, inputtedNumber, currentTotal);
}
//Connects buttons to functions, all from vendor file.
addBtn.addEventListener("click", calculate.bind(this, 'ADD'));

subtractBtn.addEventListener("click", calculate.bind(this, 'SUBTRACT'));

multiplyBtn.addEventListener("click", calculate.bind(this, 'MULTIPLY'));

divideBtn.addEventListener("click", calculate.bind(this, 'DIVIDE'));
