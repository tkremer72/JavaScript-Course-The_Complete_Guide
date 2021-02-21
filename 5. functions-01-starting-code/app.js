//Access to the button with event listener
const startGameBtn = document.getElementById("start-game-btn");
//When using an expression you no longer need to name the function
//and therefore it is an anonymous function

// const start = function /* startGame */() {
//      console.log('Game is starting....');
//};

//Direct execution
// startGame();

//Storing a function in a property is called a method
// const person = {
//      name: 'Thomas',
//      greet: function greet() {
//           console.log('Hello there!');
//      }
// }
// person.greet();

// console.dir(startGame);

//Start the game with a button click or indirect execution
//startGameBtn.addEventListener('click', start);

//global const to store the player choices
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
//set default player choice for invalid selections
const DEFAULT_USER_CHOICE = ROCK;

const RESULT_DRAW = "DRAW";
const PLAYER_WINS = "PLAYER_WINS";
const COMPUTER_WINS = "COMPUTER_WINS";

//store a boolean for when the game is in progress
let gameIsRunning = false;

//function to get input from the user
const getPlayerChoice = /* function */ () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you.`);
    return;
  }
  return selection;
};

//Computer makes random selection
const getComputerChoice = /* function */ () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

//remove the function keyword and after the argument list include the arrow function
const getWinner = /* function */ (cChoice, pChoice /* { */ = DEFAULT_USER_CHOICE) =>
  //   if (cChoice === pChoice) {
  //     return RESULT_DRAW;
  //   } else if (
  //     cChoice === ROCK && pChoice === PAPER ||
  //     cChoice === PAPER && pChoice === SCISSORS ||
  //     cChoice === SCISSORS && pChoice === ROCK
  //   ) {
  //        return PLAYER_WINS;
  //   } else {
  //        return COMPUTER_WINS;
  //   }
  //Above code as a ternary expression, when using ternary expression with arrow function, do not need curly braces?
  /* return */ cChoice === pChoice
    ? RESULT_DRAW
    : cChoice === ROCK && pChoice === PAPER ||
      cChoice === PAPER && pChoice === SCISSORS ||
      cChoice === SCISSORS && pChoice === ROCK
    ? PLAYER_WINS
    : COMPUTER_WINS;
/* } */ //We call this function inside of the event listener because we only need to run it one time
//at the start of the game.  After that we don't need it anymore.  This is an anonymous function.
startGameBtn.addEventListener("click", /* function */ () => {
    if (gameIsRunning) {
      return;
    }
    gameIsRunning = true;
    console.log("Game is starting up.....");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if(playerChoice) {
          winner = getWinner(computerChoice, playerChoice);
    } else {
         winner = getWinner(computerChoice);
    }
    //console.log(winner);
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, the computer picked ${computerChoice}, therefore you `;
    if (winner === RESULT_DRAW) {
      message = message + "had a draw.";
    } else if (winner === PLAYER_WINS) {
      message = message + "won.";
    } else {
      message = message + "lost.";
    }
    alert(message);
    gameIsRunning = false;
  });

//Rest parameters
const /* sumUp */ combine = (resultHandler, operation, ...numbers) => {
  //function inside of a function, can only be used here
    const validateNumber = (number) => {
      return isNaN(number) ? 0 : number;
    };
     let sum = 0;
     for(const num of numbers) {
       if(operation === 'ADD') {
                   sum += validateNumber(num);
       } else {
                  sum -= validateNumber(num);
       }
     }
/*      return sum;
 */
     resultHandler(sum);
};

//special available keyword arguments alternative to the rest operator
// const subtractUp = function(resultHandler, ...numbers) {
//      let sum = 0;
//      for(const num of /* arguments */numbers) {//don't use this
//           sum -= num;
//      }
//     /*  return sum; */
//     resultHandler(sum, 'The result after subtracting all numbers is ');
// };
//callback function for above sumUp function
const showResult = (messageText, result) => {
  alert(messageText + result)
};

//call the supUp and subtractUp functions use bind to include the message
/* console.log( */ 'ADD', combine(showResult.bind(this, 'The result after adding all numbers is: '), 'ADD', 1, 5, 10, -3, 6, 10);//);
/* console.log( */'ADD', combine(showResult.bind(this, 'The result after adding all numbers is: '), 'ADD', 1, 5, 10, -3, 6, 10, 25, 88);//);
/* console.log( */'SUBTRACT', combine(showResult.bind(this, 'The result after subtracting all numbers is: '), 'SUBTRACT', 1, 10, 15, 20);//);

