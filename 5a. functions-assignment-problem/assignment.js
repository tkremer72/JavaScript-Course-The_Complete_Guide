/* function sayHello(name) {
  console.log('Hi ' + name);
} */
//shortest possible form
const sayHello = name =>  console.log('Hi ' + name);

const sayHello2 = (name, phrase) =>  console.log(phrase + ' ' + name);
const sayHello3 = () =>  console.log('Howdy Thomas.');
const sayHello4 = name =>  'Hey ' + name;


sayHello('Thomas');
sayHello2('Thomas', 'Hello');
sayHello3();
console.log(sayHello4('Thomas'));

const sayHello5 = (name, phrase = `What's up`) =>  console.log(phrase + ' ' + name + '?');
sayHello5('Thomas Edward');
sayHello5('Thomas Edward', `What's up`);

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for(const text of strings) {
    if(!text) {
      hasEmptyText = true;
      break;
    }
  }
    if(!hasEmptyText) {
      cb();
    }
}

checkInput(() => {
  console.log('All not empty!')
}, 
'Hello', 
'24', 
'ABCDEF', 
'Not empty!'
);