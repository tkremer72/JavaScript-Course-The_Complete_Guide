
const task3Element = document.getElementById('task-3');

function greet() {
     alert('Some text goes here!');
}

function greetPerson(personName) {
     alert('Hello ' + personName);
}

// function threeStrings() {
//      const title = 'Mr.';
//      const first = 'Thomas';
//      const last = 'Kremer';
//     alert('Hello ' + title + ' ' + first + ' ' + last);
// }
//proper way, my way is above.
function threeStrings(one, two, three) {
     const combinedStrings = `${one}  ${two}  ${three}`;
     return combinedStrings;
}

greet();
greetPerson('Thomas E. Kremer');



task3Element.addEventListener('click', greet);

const combinedText = threeStrings('Hi', 'Mr.', 'Thomas E. Kremer!')
alert(combinedText);