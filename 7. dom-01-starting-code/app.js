// const h1 = document.getElementById('main-title');

// h1.textContent = 'Some new title!';
// h1.style.color = 'white';
// h1.style.backgroundColor = 'black';

// const li = document.querySelector('li:last-of-type');
// li.textContent = li.textContent + ' (Changed!)';

// const body = document.body;

// //Most modern way of doing this
// //const listItemElements = document.querySelectorAll('li');
// //Another way to do the above
// const listItemElements = document.getElementsByTagName('li');

// for(const listItemEl of listItemElements) {
//      console.dir(listItemEl);
// }
//DOM traversal below should be used very carefully
// const ul = document.body.firstElementChild.nextElementSibling;
// const firstLi = ul.firstElementChild;

// console.log(firstLi)

const section = document.querySelector("section");
const button = document.querySelector("button");
//section.style.backgroundColor = 'blue';//Overrides the CSS class
section.className = "red-bg";

button.addEventListener("click", () => {
//   if (section.className === "red-bg visible") {
//     section.className = "red-bg invisible";
//   } else {
//     section.className = "red-bg visible";
//   }
//easier way to do the above
//section.classList.toggle('visible'); don't need this
section.classList.toggle('invisible');
});
