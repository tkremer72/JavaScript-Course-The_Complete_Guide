// // Create a numbers array 1st method
// const numbers = [1, 2, 3];
// console.log(numbers);

// //2nd way using new Array(), if you pass one number as an argument, it sets that as the length
// // const moreNumbers = new Array(5);// [] this creates an empty array with a fixed length
// // console.log(moreNumbers);

// // //3rd way
// // const someMoreNumbers = Array(12); //Behaves like second way
// // console.log(someMoreNumbers);

// // //4th way
// // const yetMoreNumbers = Array.of(1, 3);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// //5th way, must not pass in arguments for this method
// //takes an iterable or array-like object, splits into separate components.
// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Fishing', 'Hiking', 'Camping'];
// console.log(hobbies);

// const personalData = [49, 'Thomas', {moreDetail: ['Lives in Hillsborough, NC.']}];
// console.log(personalData);

// //multidimesional array
// const analyticData = [[1, 1.6], [-5.4, 2.1]];
// console.log(analyticData);

// for(const data of analyticData) {
//      for(const dataPoint of data) {
//           console.log(dataPoint)
//      }
// }
// console.log(personalData[1]);

//Adding data to arrays
// const hobbies = ['Cooking', 'Fishing', 'Camping', 'Hiking'];
// hobbies.push('Cleaning');//adds cleaning to the end of the array
// hobbies.unshift('Coding');//Adds coding to the beginning of the array
// const shiftValue = hobbies.shift(); //removes items at the beginning of the array
// const poppedValue = hobbies.pop();//Removes the last element(cleaning) from the array.

// console.log(hobbies);
// console.log(poppedValue);
// console.log(shiftValue);

// //directly manipulating array items
// hobbies[1] = 'Bananas';
// hobbies[5] = 'Reading';//because there are not five items in the array, this will create empty items in it.
// console.log(hobbies, hobbies[4]);//second part will render undefined since that spot is empty

// //tell splice where in the index, how many to delete and what to add you 
// hobbies.splice(1, 0, 'Good food');//doesn't delete elements but adds them
// console.log(hobbies)
// //tell splice where in the index to start, and how many items to remove
// const removedElement = hobbies.splice(0, 1);//note that hobbies.splice(0); withou item count will empty the array
// console.log(hobbies, removedElement);//you can use splice with -1 to delete from the right of the array

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// //const storedResults = testResults.slice();//stores a copy of the above array in memory
// //const storedResults = testResults.slice(2); //starts at 0 and stops at 2, allows range selection
// //for the above you can use negative but both must be negative
// //below adds the new array to the existing array at the end
// const storedResults = testResults.concat([4, 7, 12, 66]);//add elements at the end of an array like push
// testResults.push(5.91);
// //slice copies an array and returns it as a brand new array
// console.log(storedResults, testResults);
// //if there are two items in the index with the same name, below will stop at the first
// console.log(testResults.indexOf(1.5));//optional second argument of where to start

// console.log(testResults.includes(10.99));//returns a boolean 
// console.log(testResults.indexOf(10.99) !== -1); // same thing as above code for includes

// //to start searching from the right use lastIndexOf, gotcha for indexOf is it works for primitive objects but not for non primitive
// const personData = [{name: 'Thomas'}, {name: 'George'}, {name: 'Frank'}];
// //console.log(personData.indexOf({name: 'Frank'})); //will return minus 1 because it didn't find the object

// //find helps identify the object in the array you're looking for
// const thomas = personData.find((person, index, persons) => {
//      return person.name === 'Thomas';
// });
// //console.log(thomas);
// const thomasIndex = personData.findIndex((person, index, persons) => {
//      return person.name === 'Thomas';
// });
// console.log(thomas, thomasIndex);

//Below is using the forEach loop to get access to the index.
// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrice = [];

// // for(const price of prices) {
// //      taxAdjustedPrice.push(price * (1 + tax));
// // }

// prices.forEach((price, index, prices) => {
//      const priceObj = {index: index, taxAdjPrice: price * (1 + tax)}
//      taxAdjustedPrice.push(priceObj);
// });
// console.log(taxAdjustedPrice);

//Easier way to do the above
// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// //map requires that it return something, in this case the priceObj
// const taxAdjustedPrices = prices.map((price, index, prices) => {
//      const priceObj = {index: index, taxAdjPrice: price * (1 + tax)}
//      return priceObj;
// });
// //prices remains untouched while taxAdjustedPrices is transformed with map
// //console.log(prices, taxAdjustedPrices);

// //Using sort to return data in an array, makes sense with numbers from lowest to highest.
// const sortedPrices1 = prices.sort((a, b) => {
//      if(a > b) {
//           return 1;
//      } else if (a === b) {
//           return 0;
//      } else {
//           return -1;
//      }
// });
// console.log(sortedPrices1);//Prices are now sorted 

// //Calling reverse to change the order.
//      const sortedPrices2 = prices.sort((a, b) => {
//           if(a > b) {
//                return 1;
//           } else if (a === b) {
//                return 0;
//           } else {
//                return -1;
//           }
//      });
//      console.log(sortedPrices2.reverse());//Reverse switches the order. from highest to lowest.

//      //instead of calling reverse change the logic in the sort method
//      const sortedPrices3 = prices.sort((a, b) => {
//           if(a > b) {
//                return -1;
//           } else if (a === b) {
//                return 0;
//           } else {
//                return 1;
//           }
//      });
//      console.log(sortedPrices3);


// //below the filter method expects the function to return true or false
// const filteredArray = prices.filter((price, index, prices) => {//creates a new array that 
//      return price > 6;//Will return all items in the array that are greater than 6
// });
// //The above code which is an arrow function can be rewritten like this
// const filteredArray2 = prices.filter(p => p > 6);
// console.log(filteredArray, filteredArray2);

// // let sum = 0;
// // prices.forEach(price => {
// //      sum += price;
// // })
// // console.log('Sum is: ' + sum);

// //above code can be shortened with reduce
// // const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
// //      return prevValue + curValue;

// // }, 0/* this second value is where reduce should start, for sum it is at 0 */);
// //Above code for reducer can be shortened 
// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
// console.log('Your total is: ' + sum);

// const data = 'New York; 10.99; 2000';

// const transformedData = data.split(';');
// transformedData[1] = +transformedData[1];
// transformedData[2] = +transformedData[2];

// console.log(transformedData.join(' '));

// const nameFragments = ['Thomas', 'Kremer'];
// const name = nameFragments.join(' ');
// console.log(name);

// //using the spread operator below
// const copiedNameFragments = [...nameFragments];

// nameFragments.push('Mr.');

// console.log(nameFragments, copiedNameFragments);

// //since the math object works with numbers and not arrays, you use the spread operator to copy what is in the array
// //or the numbers into the Math.min operation. 
// console.log(Math.min(...prices));

// const persons = [{name: 'Thomas', age: 49}, {name: 'Adam', age: 42}];

// const copiedPersons = [...persons.map(person => ({name: person.name, age: person.age}))];//copies the address where the objects are located
// const copiedPersons2 = persons.map(person => ({name: person.name, age: person.age}));//copies the address where the objects are located

// persons.push({name: 'Brian', age: 39});//copies the address where the objects are located
// persons[0].age = 50; //changes the information on the address where they object is stored and effects presons and copiedPersons

// console.log(persons, copiedPersons, copiedPersons2);

//Array destructuring
const nameData = ['Thomas', 'Edward', 'Kremer', "Mr.", 49];

// const firstName = nameData[0];
// const middleName = nameData[1];
// const lastName = nameData[2];

//use the rest ... operator to collect remaining data
const [ firstName, middleName, lastName, ...otherInfo ] = nameData;

console.log(firstName + " " + middleName + " " + lastName + ' ' + otherInfo);
console.log(`${firstName} ${middleName} ${lastName} ${otherInfo}`);

