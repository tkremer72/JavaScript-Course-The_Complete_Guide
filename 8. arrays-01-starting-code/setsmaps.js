// //Sets 
// const ids = new Set(['Hi', 'From', 'Set']);

// ids.add(2);

// if(ids.has('Hi')) {
//      ids.delete('Hi');
// }

// // console.log(ids);
// for(const entry of ids.entries()) {
//      console.log(entry[0]);
// }

// //Maps
// const person1 = { name: 'Thomas' };
// const person2 = { name: 'Edward' };

// const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

// personData.set(person2, [{date: 'two weeks ago', price: 100}]);
// console.log(personData);
// console.log(personData.get(person1));

// //output all information in a map in three ways
// for(const entry of personData.entries()) {
//      console.log(entry);
// }
// for (const[key, value] of personData.entries()) {
//      console.log(key, value);
// }
// //second way
// for(const key of personData.keys()) {
//      console.log(key);
// }
// for(const value of personData.values()) {
//      console.log(value);
// }
// console.log(personData.size);

let person = { name: 'Thomas' };
const persons = new WeakSet();
persons.add(person);
//some operations
//person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra info')

person = null;
console.log(personData);