//Part 1
const task1Element1 = document.getElementById('task-1');
const task1Element2 = document.querySelector('li');

task1Element1.style.color = "blue";
task1Element2.style.backgroundColor = 'black';

//part 2
// const docTitle1 = doument.querySelector('title');
// docTitle1.textContent = 'Assignment - Solved!';

const docHead = document.head;
docTitle2 = document.head.querySelector('title');
docTitle2.textContent = 'Assignment - Solved!';


//part 3
//const h1 = document.querySelector('h1');
const h1 = document.getElementsByTagName('h1');//gives an array of elements
h1[0].textContent = 'Assignment - solved!'; //selects the first element in the array.