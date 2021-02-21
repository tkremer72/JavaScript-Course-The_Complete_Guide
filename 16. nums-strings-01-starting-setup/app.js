//Using Math.random() Below will never yield less than one and more than ten
function randomIntBetween(min, max) {
  //min: 5, max: 10
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomIntBetween(1, 10));

//Strings
// let string1 = "This is a string.";
// let string2 = 'This is another string.';
// let string3 = `This is a string too.`;

//Tagged template
function productDescription(strings, productName, productPrice) {
  console.log(strings); //All non dynamic parts are added here
  console.log(productName); //dynamic
  console.log(productPrice); //dynamic
  let priceCategory = "pretty cheap regarding it's price";
  if (productPrice > 20) {
    priceCategory = "fairly priced";
  }
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;//output is a fully dynamic 
  //return { name: productName, price: productPrice }
}
const prodName = "JavaScript Course";
const prodPrice = 29.99;
const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);

//Regular expressions
const regex = /^\S+@\S+\.\S+$/; //check email 
regex.test(`tkremer@nc.rr.com`);
regex.exec('tkremer@nc.rr.com');
//const regex = new RegExp('');

