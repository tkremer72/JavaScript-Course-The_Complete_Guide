// //Get access to the first button element, and in this case the only button element
const button = document.querySelector('button');
// const buttons = document.querySelectorAll('button');//use all to select all buttons

// //Either use an anonymous function like below
// // button.onclick = function() {
// // };

const buttonClickHandler = () => {
     //event.target.disabled = true; //event target gives direct access to the button that was clicked
     console.log(event);
};//This method has one major downside, can only add 
// // //one handler for this kind of event to this element.  If I use two
// // //the second one will over ride the first one.
// // button.onclick = buttonClickHandler;
const anotherButtonClickHandler = () => {
     console.log('This other button has been clicked!')
}

// //Below is the better convention
// //button.addEventListener('click', buttonClickHandler);//most elegant way
// //button.addEventListener('click', anotherButtonClickHandler);

const boundFunction = buttonClickHandler.bind(this);

// // setTimeout(() => {
// //      button.removeEventListener('click', buttonClickHandler);
// //     // button.removeEventListener('click', anotherButtonClickHandler)
// // }, 5000)

// buttons.forEach(button => {
//      //button.addEventListener('click', buttonClickHandler); //this is a click event
//      button.addEventListener('mouseenter', buttonClickHandler);//this is a hover event
// });

// window.addEventListener('scroll', event => {
//      console.log(event);
// });
// let curElementNumber = 0;
 
// function scrollHandler() {
//     const distanceToBottom = document.body.getBoundingClientRect().bottom;
 
//     if (distanceToBottom < document.documentElement.clientHeight + 150) {
//         const newDataElement = document.createElement('div');
//         curElementNumber++;
//         newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
//         document.body.append(newDataElement);
//     }
// }
 
// window.addEventListener('scroll', scrollHandler);

const form = document.querySelector('form');

form.addEventListener('submit', event => {
     event.preventDefault();
     console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('click', event => {
     console.log('CLICKED DIV!')
     console.log(event);
}/* , true */);//adding the third argument of true, sets this element to part of the capturing phase.
//making the div part of the capturing phase allows the button event to be first.
button.addEventListener('click', event => {
     event.stopPropagation(); //stops all button events from propagating to other events.
     event.stopImmediatePropagation(); //stops other listeners on the same element from running
     console.log('CLICKED BUTTON!')
     console.log(event);
     console.log(this);
});

//Color clicked list items 
const listItems = document.querySelectorAll('li');

//this code below is cumbersome and bad for performance.
// listItems.forEach(listItem => {
//      listItem.addEventListener('click', event => {
//           event.target.classList.toggle('highlight')
//      });
// });

//do the above code with the delegate approach which uses one event listener 
const list = document.querySelector('ul');//problematic for complex situations
list.addEventListener('click', event => {
     //console.log(event.currentTarget);
    // event.target.classList.toggle('highlight');
    event.target.closest('li').classList.toggle('highlight');
    //form.submit(); will submit the form from this event.
    button.click(); //will also submit the form from this event.
});//here  we target the closest item to the list item and color the whole thing.

