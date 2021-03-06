# JavaScript Course - The Complete Guide 2021 (Beginner + Advanced)

# Coercion vs Conversion
It's important to understand that JavaScript is able to use variables in conditions - even without comparison operators.

This is kind of obvious, if we consider a boolean variable, for example:

let isLoggedIn = true;
if (isLoggedIn) {
    ...
}
Since if just wants a condition that returns true or false, it makes sense that you can just provide a boolean variable or value and it works - without the extra comparison (if (isLoggedIn === true) - that would also work but is redundant).

Whilst the above example makes sense, it can be confusing when you encounter code like this for the first time:

let userInput = 'Max';
if (userInput) {
    ... // this code here will execute because 'Max' is "truthy" (all strings but empty strings are)
}
JavaScript tries to coerce ("convert without really converting") the values you pass to if (or other places where conditions are required) to boolean values. That means that it tries to interpret 'Max' as a boolean - and there it follows the rules outlined in the previous lecture (e.g. 0 is treated as false, all other numbers are treated as true etc.)

It's important to understand that JavaScript doesn't really convert the value though.

userInput still holds 'Max' after being used in a condition like shown above - it's not converted to a boolean. That would be horrible because you'd invisibly lose the values stored in your variables.

Instead,

if (userInput) { ... }
is basically transformed (behind the scenes) to

if (userInput === true) {
And here, the === operator generates and returns a boolean. It also doesn't touch the variable you're comparing - userInput stays a string. But it generates a new boolean which is temporarily used in the comparison.

And that's exactly what JavaScript automatically does when it finds something like this:

if (userInput) { ... }

An expression is something that yields a value you could store in a constant or a variable or return in a function.

A statement is just a statement not an expression, you can't use it in places where you need or expect a value to be returned.

# Logical Operators - A Quick Summary
As a reference which you can come back to (or print out), here's a quick summary of how logical operators and comparison operators behave in JavaScript:

const userName = 'Max';
const altName = '';
console.log(userName === 'Max'); // generates and prints a boolean => true
console.log(userName); // wasn't touched, still is a string => 'Max'
 
console.log(userName || null); // userName is truthy and therefore returned by || => 'Max'
console.log(altName || 'Max'); // altName is falsy (empty string), hence 'Max' is returned => 'Max'
console.log(altName || ''); // both altName and '' are falsy but if the first operand is falsy, the second one is always returned => ''
console.log(altName || null || 'Anna'); // altName and null are falsy, 'Anna' is returned => 'Anna'
 
console.log(userName && 'Anna'); // userName is truthy, hence second (!) value is returned => 'Anna'
console.log(altName && 'Anna'); // altName is falsy, hence first value is returned => ''
console.log(userName && ''); // userName is truthy, hence second value is returned => ''
Always keep in mind: NO operator (neither ===, > etc. nor && or ||) changes the variable you might be using in the comparison. In the above examples, the values stored in userName and altName are NEVER changed.

===, > etc. just generate new boolean values which are used in the comparison. || and && generate NO booleans, they just treat the values before and after them as conditions (which therefore need to yield boolean values and are coerced to booleans if required).

Because of the above-described behaviors, you often use || in JavaScript to assign default/ fallback values to variables/ constants:

const enteredValue = ''; // let's assume this is set based on some input provided by the user, therefore it might be an empty string
 
const userName = enteredValue || 'PLACEHOLDER'; // will assign 'PLACE

# Indroducing Loops
for loop
    execute code a certain amount of times(with counter variable)
    for(i = 0; i < 3; i++)

    for-of loop execute for every element in an array
    for(const el of array) { console.log(el) }

    for-in loop
    for(const key in obj) { console.log(key); console.log(obj[key]);}

    while loop execute code as long as a condition is true
    while(isLoggedIn) { }

    An infinite loop is for(;;);

# Error Handling
    Some errors can't be avoided(beyond your control as a developer)
    User input errors
        e.g. user enters text like 'hi' instead of a number
    Network errors
        e.g. server is offline
    Throw and catch errors to fail gracefully or recover if possible
        enter the try{} catch(err) {} block
        
# Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

---

The following resources may be helpful.

Control Structures (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

JavaScript Loops (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration


# Section 5: Behind the Scenes &
The (Weird) Past (ES3, ES5) & Present (ES6+) of JavaScript

# JavaScript Evolution
    ES5 (and older)
        Supported in basically all browsers including old IE
        Only had var, not let or const
        Generally same syntax as ES6, but quite some missing features.
    ES6 (and newer): Modern JavaScript - taught from the beginning of this course.
        Supported in modern browsers, can(mostly) be transpiled to ES5.
        Many new features that help us write cleaner, better & faster code.
        Still under active development, but ES6 was a big step forward.
    JavaScript has a mode that you can get rid of forgiving behavior from JavaScript, that is the string 'user strict';

JavaScript is single-threaded - One thing happens at a time

# [DEEP DIVE] JavaScript Language vs Browser APIs

In the last lectures, we covered the JavaScript engine and what it does inside of the browser. You also learned that there is a difference between the JS code execution and Browser APIs you might tap into during that execution.

Essentially, you can split the code you write into these two pieces:

1) The JavaScript Language
Understands core syntax (let, const etc) but does NOT know anything about the DOM for example

2) Browser APIs
Not responsible for understanding your code (that's what 1) does) but instead responsible for exposing APIs like the DOM API which you can use from inside your script code.



The JavaScript language (1) is advanced by the Ecma International Technical Committee 39 (TC39), which is a group that's part of the Ecma organization. It's responsible for adding new features to the JavaScript language itself. For example, in the past, it was responsible for adding let and const.

You can learn more about TC39 here: https://tc39.es/

And you can explore the current proposals that are being discussed by that group - features that potentially make it into the core JavaScript language in the future: https://github.com/tc39/proposals

IMPORTANT: Just because a feature becomes part of the language does NOT mean that all JavaScript engines immediately support that feature. Of course the people developing the engines are doing their best to provide support as soon as possible but that process simply also takes time.

On the other hand, engine vendors also sometimes start supporting certain features BEFORE TC39 made a feature an official part of JavaScript. Because in the end, it's of course totally up to the people working on the engines to decide which syntax their JS engine understands.



Browser APIs also are standardized because the different browser vendors (Google for Chrome, Microsoft for Edge etc.) of course want to (roughly) provide feature parity and similar APIs. It wouldn't be a great developer experience if you had different functions which you need to call to make your scripts work in different browsers. Although, in the past, this was pretty normal.

Nowadays, thankfully, this is getting way better because there also is a working group that works on browser APIs - so that different features and APIs in different browsers are avoided as good as possible.

That working group has the name WHATWG and you can learn more about it here: https://whatwg.org/

If you're interested in learning more about the APIs that were/ are "managed" by this group, you can check this site: https://spec.whatwg.org/

This working group is not related to TC39!

# Primitive vs. Reference Values
    Two categories of Types/Values in JavaScript
        Primitive Values - Stored in memory(normally on Stack), variables store value itself.  Copying a variable(= assign to different variable)   copies the value.
            Strings
            Numbers
            Booleans
            null
            undefined
            Symbol

        Reference Values
            All other objects ('more expensive to create')
            Stored in memory(heap), variable stores a pointer(address) to location in memory. Copying a variable (= assign to different variable) copies the pointer or reference.

# Garbage Collection
    Periodically checks Heap for unused objects(objects without references).  
    Removes unused objects.
    Beware of memory leaks, unused objects where you still hold references to.

# Useful Resources & Links

The following resources may be helpful - please be aware that some of them are also very advanced.

More on JavaScript Memory Management (Garbage Collection): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management

V8's Garbage Collection Logic: https://v8.dev/blog/free-garbage-collection

V8's JavaScript Engine in Great Detail: https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef

More on Primitive vs Reference Values: https://academind.com/learn/javascript/reference-vs-primitive-values/

# Parameters vs Arguments

    Different ways of creating functions
    Anonymous functions
    Callback functions & functions in functions
    Default arguments & Rest Operator
    bind() & More

# Parameters vs Arguments
Throughout this course, you'll hear me use the words "parameters" and "arguments" interchangeably.

Technically, there is a difference though:

Parameters are these variables which you specify between parentheses when defining a function.

function sayHi(name) { ... } 
In this example, name is a parameter.

Arguments then are the concrete values you pass to a function when calling that function:

sayHi('Max');
'Max' is an argument of the function therefore - for the name parameter to be precise.

Since both concepts obviously are extremely close connected, I will often say "let's define which arguments a function receives" or something comparable, since defining the arguments of a function in the end means that you set up its parameters (and vice-versa).

# Functions vs Methods
Storing a function in a property is called a method
A function is an object

Function Declaration - JavaScript hoists the function to the top and intializes it, can be declared anywhere(i.e. also after it's used)
    function multiply(a, b) {
        return a * b;
    }
Function expression - JavaScript Hoists the function to the top but does not initialize it or define it and it can not be declared anywhere in the file(i.e. not after the function is used.)
    const multiply = function(a, b) {
        return a * b;
    }

Rules for arrow function
    general syntax: (arg1, arg2) => {...} 
    no arguments - () => {} empty pair of parenthesis required
    exactly 1 argument/parameter - arg => {...} can omit parenthesis
    exactly one expression in function body - (a, b) => a + b curly braces can be omitted, result is returned.
    more than one expression in the function body (a, b) => { a *= 2; return a + b;} curly braces and return statement required.

# Different Arrow Function Syntaxes
For arrow functions, you got a couple of different syntaxes which you can use - here's a summary.

Important: Don't miss the "function only returns an object" special case at the end of this article!

1) Default syntax:

const add = (a, b) => {
    const result = a + b;
    return result; // like in "normal" functions, parameters and return statement are OPTIONAL!
};
Noteworthy: Semi-colon at end, no function keyword, parentheses around parameters/ arguments.

2) Shorter parameter syntax, if exactly one parameter is received:

const log = message => {
    console.log(message); // could also return something of course - this example just doesn't
};
Noteworthy: Parentheses around parameter list can be omitted (for exactly one argument).

3) Empty parameter parentheses if NO arguments are received:

const greet = () => {
    console.log('Hi there!');
};
Noteworthy: Parentheses have to be added (can't be omitted)

4) Shorter function body, if exactly one expression is used:

const add = (a, b) => a + b;
Noteworthy: Curly braces and return statement can be omitted, expression result is always returned automatically

5) Function returns an object (with shortened syntax as shown in 4)):

const loadPerson = pName => ({name: pName });
Noteworthy: Extra parentheses are required around the object, since the curly braces would otherwise be interpreted as the function body delimiters (and hence a syntax error would be thrown here).

That last case can be confusing: Normally, in JavaScript, curly braces always can have exactly one meaning.

const person = { name: 'Max' }; // Clearly creates an object
if (something) { ... } // Clearly used to mark the if statement block
But when using arrow functions, curly braces can have two meanings:

1) Mark the function body (in default form)

2) Create an object which you want to return (in shorter function body form)

To "tell" JavaScript what you want to do, wrap the expression (e.g. object creation) in parentheses like shown above.

A callback function is called for you by something else such as the browser.

# Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

---

The following resources may be helpful.

More on Functions (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

bind(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

# Working With The DOM
    HTML, DOM & JavaScript
    Nodes & Elements
    Querying DOM Nodes & Traversing the DOM
    Evaluating & Manipulating DOM Nodes
    Creating & Removing DOM Nodes

# Summary: Node Query Methods
Here's a summary of the various methods you got to reach out to DOM elements (note: you can only query for element nodes).

Besides the below query methods, you also got these special properties on the document object to select parts of the document:

document.body => Selects the <body> element node.

document.head => Selects the <head> element node.

document.documentElement => Selects the <html> element node

---

QUERY METHODS

---

document.querySelector(<CSS selector>);
Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class') and returns the first (!) matching element in the DOM. Returns null if no matching element could be found.

More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

document.getElementById(<ID>);
Takes an ID (without #, just the id name) and returns the element that has this id. Since the same ID shouldn't occur more than once on your page, it'll always return exactly that one element. Returns null if no element with the specified ID could be found.

More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

document.querySelectorAll(<CSS selector>);
Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class') and returns all matching elements in the DOM as a static (non-live) NodeList. Returns and empty NodeList if no matching element could be found.

More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

document.getElementsByClassName(<CSS CLASS>);
Takes a CSS class g (e.g. 'some-class') and returns a live HTMLCollection of matched elements in your DOM. Returns an empty HTMLCollection if not matching elements were found.

More information: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName

document.getElementsByTagName(<HTML TAG>);
Takes an HTML tag (e.g. 'p') and returns a live HTMLCollection of matched elements in your DOM. Returns an empty HTMLCollection if not matching elements were found.

More information: https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName

There also is the getElementsByName() method which really isn't used commonly (https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName).
    
# Traversing the DOM
    Child
        Direct child node or element
            <div>
            <p is a child of div>
            A <em is not a child of div>test!</em>
            </p>
            </div>
    Descendant
        Direct or indirect child node or element
             <div>
            <p is a child of div>
             A <em is also a child of div>test!</em>
            </p>
            </div
    Parent
        Direct parent node or element
            <div is a parent of p but not of em>
            <p>
            A <em>test!</em>
            </p>
             </div
    Ancestor
        Direct or indirect parent of node or element
            <div is an ancestor of p and of em>
            <p>
             A <em>test!</em>
            </p>
             </div>
# Styling DOM elements
    Directly target individual CSS Styles(on the element)
    Controls styles as inline styles on the element
    Style property names are based on CSS properties but have adjusted names(e.g. backgroundColor)

    Via ClassName
    Directly set the CSS classes assigned to the element
    Set/Control all classes at once
    You can also control the id or other properties

    Via classList 
    Conveniently add, remove or toggle CSS classes
    Fine-grained control over classes that are added.
    Can be used with className(with care)

# Summary: Insert, Replace, Remove
There are many ways of creating, inserting, replacing and removing DOM elements - here's a summary of the options you have.

For browser support, check the provided links and also the "Browser Support" module you find later in the course.

Create & Insert
You got two main options: Provide an HTML snippet (e.g. via innerHTML) to a valid HTML snippet and let the browser render it OR create a DOM object in JS code and append/ insert it manually. The latter approach has the advantage of giving you direct access to the DOM object (useful for setting its properties or adding event listeners). The downside is that you have to write more code.

Adding HTML Code:

const root = document.getElementById('root-el'); // selects something like <div id="root-el">
root.innerHTML = `
    <div>
        <h2>Welcome!</h2>
        <p>This is all create & rendered automatically!</p>
    </div>
`;
Important: Any existing content in root is  completely replaced when using innerHTML. If you want to append/ insert HTML code, you can use insertAdjacentHTML instead: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

const root = document.getElementById('root-el'); // selects something like <div id="root-el">
root.insertAdjacentHTML('afterbegin', `
    <div>
        <h2>Welcome!</h2>
        <p>This is all create & rendered automatically!</p>
    </div>
`);
Creating & Inserting DOM Objects Manually:

const someParagraph = document.createElement('p'); // creates a "p" element (i.e. a <p> element)
const root = document.getElementById('root-el'); // selects something like <div id="root-el">
root.append(someParagraph);
In this example, we create a paragraph and append it to root - append means that it's inserted at the end of root (i.e. inside of it but AFTER all other child nodes it holds).

Insertion Methods:

append() => https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append

Browser support is decent but for IE, appendChild() could be preferred => https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

prepend() => https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend

Browser support is decent but for IE, insertBefore() could be preferred => https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

before(), after() => https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before & https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after

Browser support is okay but IE and Safari don't support it. Consider insertBefore() (https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore) or insertAdjacentElement() (https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement) as substitutes.

Important (no matter how you insert elements): Whenever you insert elements, you MOVE the element to that new place if you already inserted it before. It's NOT copied (you can copy an element via someElement.cloneNode(true) though).

Replace
You can replace elements in the DOM with two main methods:

replaceWith() => https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith

replaceChild() => https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild

replaceWith() is a bit easier to use and has decent browser support - with IE being the exception. To support that as well, consider using replaceChild().

Remove
You can remove elements with three main methods:

someElement.innerHTML = '' => Clears all HTML content of someElement and hence removes any objects rendered in there.

someElement.remove() => Removes a single element (someElement) from the DOM (https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove). Browser support is good, IE again doesn't like it though. Use removeChild (see below) instead.

someElement.parentNode.removeChild(someElement) =>  Removes the provided child element (NOT the element on which you call it). Provides broad browser support but of course requires a bit more code (https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild).

What about Text Nodes?
You can easily create & insert text nodes in one go:

someElement.textContent = 'Hi there!';
This creates and inserts the text node with a content of 'Hi there!'.

Want to append to existing text?

Just use:

someElement.textContent = someElement.textContent + 'More text!'

# Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

---

The following resources may be helpful.

Thorough DOM Introduction on MDN (also check the linked guides on the left on that page): https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

# Section 8 More on Arrays & Iterables
    An Array-like Object
        Technically
            Objects that have a length property and use indexes to access items.
        To us humans
            See technical explination
        Note: Not ever array-like object is an Array! Other array-likes are(for example): NodeList, String
# Creating arrays
    Most common - const numbers = [1, 2, 3];
    For the rest see the first part of app.js
    Arrays can be of mixed type, they can have strings, numbers or objects.  Arrays can be nested or multidimensional.  Arrays are really flexible.
    Arrays are index based.
    shift and unshift is slower than push and pop.

# Chaining Methods in JavaScript
With all these useful array methods you learned about, it's important to understand how you can combine them. Let's take map() and reduce() as an example:

const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const transformedArray = originalArray.map(obj => obj.price); // produces [10.99, 5.99, 29.99]
const sum = transformedArray.reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97
Of course, you could skip the map step and just add the extraction logic to reduce():

const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const sum = originalArray.reduce((sumVal, curVal) => sumVal + curVal.price, 0); // => 46.97
But let's say you have a more complex extraction logic and hence want to split this into multiple method calls. Or you have a re-usable map function which you want to be able to use in different places of your app. Then you can still write the initial example in a more concise way if you leverage method chaining:

const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const sum = originalArray.map(obj => obj.price)
    .reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97
We call .reduce() directly on the result of map() (which produces an array, that's why this is possible). Hence we can avoid storing the mapped array in a separate constant or variable that we might not need in any other place.

# Maps and Sets
    Arrays - store(nested) data of any kind and length
    Iterable, also many special array methods available
    Order is guaranteed, duplicates are allowed, zero based index to access elements.
    Sets - Store(nested) data of any kind and length
    Iterable - also some special set methods available
    Order is NOT guaranteed, duplicates are NOT allowed, no index-based access.
    Maps - Strore key-value data of any kind and length, any key values are allowed.
    Iterable - also some special map methods available
    Order is guaranteed, duplicate keys are NOT allowed, key based access.

# Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

---

The following resources may be helpful.

Thorough Array on MDN (also check the linked methods on the left on that page): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

# Core Data Structure In JavaScript
typically reflect real world entities
e.g. button, movie
allow us to apply real-world logic to coding
made up of properties & methods
store data in properties and actions in methods
allow you to group related data together and split your code into logical pieces.

# Objects & Primitive Values
Objects are reference values - you learned that.

It might not have been obvious yet but it's also important to recognize that, in the end, objects are of course made up of primitive values.

Here's an example:

const complexPerson = {
    name: 'Max',
    hobbies: ['Sports', 'Cooking'],
    address: {
        street: 'Some Street 5',
        stateId: 5,
        country: 'Germany',
        phone: {
            number: 12 345 678 9,
            isMobile: true
        }
    },
};
Event though complexPerson has multiple nested reference values (nested arrays and objects), you end up with primitive values if you drill into the object.

name holds a string ('Max') => Primitive value

hobbies holds an array (i.e. a reference value) which is full of strings ('Sports', 'Cooking') => Primitive values

address holds an object which in turn holds a mixture of primitive values like 'Some Street 5' and nested objects (phone), but if you dive into phone, you find only numbers and booleans in there => Primitive values

So you could say: Primitive values are the core building blocks that hold your data, objects (and arrays) are helpful for organizing and working with that data.


Keys are more flexable than variables.
properties are ordered the way we enter them in our code. one exception is if we have an object with all number keys, the order is sorted.

# "this" - Summary
The this keyword can lead to some headaches in JavaScript - this summary hopefully acts as a remedy.

this refers to different things, depending on where it's used and how (if used in a function) a function is called.

Generally, this refers to the "thing" which called a function (if used inside of a function). That can be the global context, an object or some bound data/ object (e.g. when the browser binds this to the button that triggered a click event).

1) this in Global Context (i.e. outside of any function)

function something() { ... }
 
console.log(this); // logs global object (window in browser) - ALWAYS (also in strict mode)!
2) this in a Function (non-Arrow) - Called in the global context

function something() { 
    console.log(this);
}
 
something(); // logs global object (window in browser) in non-strict mode, undefined in strict mode
3) this in an Arrow-Function - Called in the global context

const something = () => { 
    console.log(this);
}
 
something(); // logs global object (window in browser) - ALWAYS (also in strict mode)!
4) this in a Method (non-Arrow) - Called on an object

const person = { 
    name: 'Max',
    greet: function() { // or use method shorthand: greet() { ... }
        console.log(this.name);
    }
};
 
person.greet(); // logs 'Max', "this" refers to the person object
5) this in a Method (Arrow Function) - Called on an object

const person = { 
    name: 'Max',
    greet: () => {
        console.log(this.name);
    }
};
 
person.greet(); // logs nothing (or some global name on window object), "this" refers to global (window) object, even in strict mode
this can refer to unexpected things if you call it on some other object, e.g.:

const person = { 
    name: 'Max',
    greet() {
        console.log(this.name);
    }
};
 
const anotherPerson = { name: 'Manuel' }; // does NOT have a built-in greet method!
 
anotherPerson.sayHi = person.greet; // greet is NOT called here, it's just assigned to a new property/ method on the "anotherPerson" object
 
anotherPerson.sayHi(); // logs 'Manuel' because method is called on "anotherPerson" object => "this" refers to the "thing" which called it
If in doubt, a console.log(this); can always help you find out what this is referring to at the moment!

# Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

---

The following resources may be helpful.

More on the this keyword (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

# Classes & Object-oriented Programming - Approach for writing code.
    What is "Object-oriented Programming (OOP)?
    Classes & Instances
    Properties, Fields & Methods
    Inheritance

# Static properties, fields & methods
    Static Field/Property/Method
        Defined with static keyword
        Only accessible on class itself, without instantiation(i.e. not on instance)
        Typically used in helper classes, global configuration etc.
    Instance Field, Property, Method
        Defined without static keyword
        Only accessible on instances(=objects) based on class
        Used for core, re-usable logic

# Are Object Literals ({}) Obsolete?
    No! Great for general data grouping, objects which you only create once.  Quick and easy to create, no overhead.
    But also consider classes which are great when you re-create the same type of object over and over again.  
    More overhead initially but easy "object duplication" thereafter. 
# Private Fields, Properties & Methods
    Public
        Accessible OUTSIDE of the class/object
        The "things" you work with in your code
        Example: product.buy()
    Private 
        Accessible ONLY INSIDE fo the class/object
        The "things" you work with in your class only(to split & re-use code)
        Example: Hard-coded (fallback) values, re-used class-specific logic.
# "Pseudo-Private" Properties
The addition of private fields and properties is relatively new - in the past, such a feature was not part of JavaScript.

Hence you might find many scripts that use a concept which you could describe as "pseudo-private" properties.

It would look like this:

class User {
    constructor() {
        this._role = 'admin';
    }
}
 
// or directly in an object
 
const product = {
    _internalId: 'abc1'
};
What's that?

It's a quite common convention to prefix private properties with an underscore (_) to signal that they should not be accessed from outside of the object.

Important: It's just a convention that should signal something! It does NOT technically prevent access. You CAN run this code without errors for example:

const product = {
    _internalId: 'abc1'
};
console.log(product._internalId); // works!
It's really just a hint that developers should respect. It's not as strict as the "real" private properties introduced recently (#propertyName).

# Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

---

The following resources may be helpful.

Classes on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

# In Any Language I should aim for a pure function with a predictable outcome.  Try to keep them simple and pure and predictable.

Every function in JavaScript is a closure - closely related to having scopes for variables.  

### Optional: IIFEs
In JavaScript - especially in older scripts - you sometimes find a pattern described as "IIFEs". IIFE stands for "Immediately Invoked Function Expression" and the pattern you might find looks like this (directly in a script file):

(function() {
    var age = 30;
    console.log(age); // 30
})()
 
console.log(age); // Error: "age is not defined"
What's that?

We see a function expression which calls itself (please note the () right after the function).

It's NOT a function declaration because it's wrapped in () - that happens on purpose since you can't immediately execute function declarations.

But why would you write some code?

Please note that the snippet uses var, NOT let or const. Remember that var does NOT use block scope but only differ between global and function scope.

As a consequence, it was hard to control where variables were available - variables outside of function always were available globally. Well, IIFEs solve that problem since the script (or parts of it) essentially are wrapped in a function => Function scope is used.

Nowadays, this is not really required anymore. With let and const we got block scope and if you want to restrict where variables are available (outside of functions, if statements, for loops etc - where you automatically have scoped variables since these structures create blocks), you can simply wrap the code that should have scoped variables with {}.

{
    const age = 30;
    console.log(age); // 30
}
 
console.log(age); // Error: "age is not defined"
Not something you see too often but something that is possible.

# Working With JavaScript Libraries 
    Third-party libraries add utility functions & "make your life" easier.. Axios doesn't require that we convert the data response, it comes already converted.

Axios does a lot of work in the background for the developer.

## Third Party Considerations

    When importing and using third party libraries, if downloaded, brings in everything that comes with the library itself, in this case if you don't intend to use everything, you might want to use the CDN so that you're not including a lot of over head. 

    In some cases you can import some parts of the library and strip out the parts you do not need.  Keep in mind not all libraries allow this type of flexability.

    Also make sure that you are using secured libraries.  Having open source is generally good but you also want to make sure the library you use is actively maintained.  

### Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

# JavaScript Modules
    Writing Modular (=multi file) code.
    What & Why
    Usage!

# Splitting up code
Create two folders that live within the scripts folder.
Create a Component.js, Project-Item.js, Project-List.js and Tooltip.js file that live within the App folder.
Move the analytics.js file and the DOMHelper.js files to the Utility folder and rename them to match my naming convention which uses upper case characters for the first letter in every word as well as dashes.  So Analytics.js and DOM-Helper.js.  
Renamed the app.js file to App.js to match my naming convention.
Fix the paths in the App.js file that may have broken with renaming and then start moving items.
Move each section of the App.js file to the corresponding file. 
Using modules locks down the application. Export the components and import them into the files where they are used.

Modules make error finding easier and code easier to manage.
Modules have their own scope.  You can add things to the window object and then use it.  You can not use code that is not exported and vice versa.  Imports are automatically sorted to the top.  Another identifier in addition to the window object you also have access to the globalThis.  globalThis can be used to store and read data.  globalThis works everywhere, points at the window object or another global object. 

### Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

# Tooling And Workflows

Development server -webpack-dev-server Or serve standalone tool - serve under more realistic circumstances.
Bundling tool - webpack - Combine multiple files into bundled code(less files)
Code optimization tool - webpack - Optimize code(shorten function names, remove whitespace)
* Code Complication tool - Babel - Write modern code, get "older" code as output
Code quality checker - ESLint - Check code quality, check for conventions and patterns.

Workflows 
     Development - Linting(ESLint) - Bundling(webpack) - Reload Dev Server.

     Production - Linting(ESLint) - Bundling(Webpack) - Compilation(Babel) - Optimization - Production-ready code.

### Bonus: Multiple Entry Points
In the example project, we only have one main entry point: app.js.

In bigger projects - with multiple HTML pages - you might have multiple scripts for the different pages (HTML files) you might be building. Hence you might need more than one entry point because you want to build more than one bundle (i.e. not every HTML page uses the same script).

This can easily be configured with Webpack:

Instead of

entry: './src/app.js'
use

entry: {
    welcome: './src/welcome-page/welcome.js',
    about: './src/about-page/about.js',
    // etc.
}
Now Webpack will look up all these entry points and create one bundle per entry point - you can then link to these bundles in your respective HTML files.

A simple rule that makes sense for most projects is:

One entry point per HTML file because you typically have one script per HTML file.

If you share a script across multiple HTML files or you have a file that does not need any script, you of course can deviate from that rule.

You can learn more about multiple entry points with these two resources:

Code Splitting (i.e. generating more than one bundle): https://webpack.js.org/guides/code-splitting/

Entry Point Configuration: https://webpack.js.org/concepts/#entry

And in general, check out the official Webpack docs to dive into it in detail: https://webpack.js.org/guides/

BE SURE TO INCLUDE THE PUBLIC PATH SO THAT WEBPACK POINTS TO THE OUTPUT FOLDER.


### Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

---

The following resources may be helpful.

More on localStorage / sessionStorage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

More on Cookies (in JS): https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie

More on IndexedDB: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

# # JavaScript & Browser Support
     Browser Features ('browser APIs')
          The browser decides which features it offers
          Examples fetch(), geolocation, DOM API
          Implemented individually

     JavaScript Syntax
          The browsers JS engine defines which JS syntax/ version is supported.
          Examples: let, const, async/await, Promises
          Implement individually or in chunks e.g. ES6

Is a feature available?
     MDN
          check feature article - browser support table at the bottom.  Also often includes notes, fallbacks, workarounds(if support is missing)
     caniuse.com
          Search for a feature name to get a detailed overview table(including browser market shares)
          Also includes notes, fallbacks, workarounds(if support is missing)
     Google 
          Google "fetch javascript browser support" and check results.
          For more complex issues, Stackoverflow discussions can be helpful.
     ES6/JS Compat Table
          For next-gen JavaScript synatax(!) features, check this overview table.
          Provides detailed feature split and also includes support of transpilers.

Naive thought: Support All Browsers & Browser Versions
     DONT DO THIS - Analyze your market, who will your users be?

# Babel

Use babel-loader - npm install --save-dev @babel-loader @babel/core @babel/preset-env
 modify the webpack.config file with the script provided from the babel-loader github page.  then modify the package.json file to add the browsersList: key set it to whatever browsers you want to support. In the case of this project > 0.2%, not dead.  

# Polyfills

     npm install --save core-js
     npm install --save regenerator-runtime

modify the webpack.config files to include the useBuiltIns: 'usage' key in the presets array and set the array to a nested array or an array inside of an array.  Also have to add another key, the corejs: { version: 3 } key to both webpack.config files, now I can use the polyfills as needed. 
     


### Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

---

The following resources may be helpful.

Babel (Official Docs): https://babeljs.io/docs/en/

babel-loader Docs: https://github.com/babel/babel-loader

@babel/preset-env Docs: https://babeljs.io/docs/en/babel-preset-env

core-js Docs: https://github.com/zloirock/core-js

### Continuing without a Credit Card
Using Google Maps unfortunately requires a credit card, even though you got a generous free tier which you very likely wouldn't exceed.

If you got no credit card, you can look into OpenLayers as an alternative (here's how to render a map with it: https://openlayers.org/en/latest/doc/quickstart.html).

In our concrete example, this would render a map:

Include this in your HTML file:

 <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/css/ol.css" type="text/css">
    <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/build/ol.js"></script>
In Map.js, use this JS code:

document.getElementById('map').innerHTML = ''; // clear the <p> in the <div id="map">
 
const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
    zoom: 16
  })
});
You can explore the OpenLayers docs to learn how to render a broad variety of different things.

In the next lectures, we'll also use the Google API to convert a pair of coordinates into an address and vice versa. For that, we'll also use the Google APIs and hence need a credit card.

Unfortunately, I'm not aware of any credit-card-free alternatives, so for now the solution will be to simply return some dummy data in those utility functions we'll add:

export async function getAddressFromCoords(coords) {
  return '6th Avenue'; // return any dummy address you want
}
 
export async function getCoordsFromAddress(address) {
  return {lat: 47.01, lng: 33.55}; // return any dummy coordinates you want
}
### Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

# React
    A JavaScript Library* For Building user interfaces
    Declarative approach, you define the result, not the steps that lead to the result.  Normal JavaScript uses an Iperative approach, you define all of the steps to achieve the result
    You define components and buid your UI with these components. 

# Symbols
    Primitive values
    Used as object propterty identifiers
    Build-in & creatable by developers
    Uniqueness is guaranteed
# Iterators & Generators
    Create your own loopable values
    What arrays, strings, etc. use internally
# Reflect API 
    API to control objects
    Standardized & grouped methods
    Control code usage/impact
# Proxy API
    Creating traps for object operations
    Step in and execute code
    Control code usage/impact

### Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

---

The following resources may be helpful.

More about Symbols (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

List of Well-Known Symbols: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Well-known_symbols

More about Iterators & Generators (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

More about the Reflect API (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect

More about the Proxy API (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

List of all Proxy API Traps: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#A_complete_traps_list_example

# Node JS
NodeJS Error Handling
The finished code of this section will crash if you try to visit /my-place/:id with an invalid ID (that can't be converted to the special MongoDB ObjectId type).

You can of course add error handling in a similar way as you learned it before in the course:

try-catch for synchronous code (or async/ await)

then() / catch() for promise-based code (where you don't use async/ await)

Example:

router.get('/location/:lid', (req, res, next) => {
  const locationId = req.params.lid;
 
  client.connect(function(err, client) {
    const db = client.db('locations');
 
    // Insert a single document
    db.collection('user-locations').findOne(
      {
        _id: new mongodb.ObjectId(locationId)
      },
      function(err, doc) {
        // if (err) {}
        if (!doc) {
          return res.status(404).json({ message: 'Not found!' });
        }
        res.json({ address: doc.address, coordinates: doc.coords });
      }
    );
  });
});
can be improved like this:

router.get('/location/:lid', (req, res, next) => {
  const locationId = req.params.lid;
 
  client.connect(function(err, client) {
    const db = client.db('locations');
    
    // THIS WAS ADDED
    let locationId;
    try {
        locationId = new mongodb.ObjectId(locationId);
    } catch (error) {
        // return to make sure the other code does not execute
        return res.status(500).json({message: 'Invalid id!'}); 
    }
    // END OF ADDED CODE
 
    // Insert a single document
    db.collection('user-locations').findOne(
      {
        _id: locationId // will only be reached if the above code didn't throw an error
      },
      function(err, doc) {
        // if (err) {}
        if (!doc) {
          return res.status(404).json({ message: 'Not found!' });
        }
        res.json({ address: doc.address, coordinates: doc.coords });
      }
    );
  });
});
I dive deeper into more generic NodeJS error handling in my "NodeJS - The Complete Guide" course but the important takeaway here is, that you have the same error handling tools as in browser-side JavaScript.

Fullscreen
### Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

---

The following resources may be helpful.

More about NodeJS: https://academind.com/learn/node-js/

NodeJS Official Docs: https://nodejs.org/en/docs/

# What Could Go Wrong
Security Details In Your Code
    You JavaScript Code Can Be Read By ANYONE
    Security-relevant details can be read
    Attackers may be able to abuse exposed data
    Example: Database access credentials exposed in code
Cross-site Scripting Attacks(XSS)
    Attack pattern where malicious JS code gets injected + executed
    Injected code can do ANYTHING your code could do as well.
    Very Dangerous: Full behind-the-scenes control for an attacker.
    Example: Uncheked user-generated content
Cross-site Request Forgery(CSRF)
    Attack pattern that depends on injected content(e.g. image)
    Requests to malicious servers are made with user's cookies.
    Actions can be executed without the user knowing
    Example: Malicious image URL/ XSS
Cross-Origin Resource Sharing (CORS)
    Not an attack pattern but a security concept
    Requests are only allowed from same origin (domain)
    Controlled via server side response headers and browser
    Example: JavaScript Modules

### Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

---

The following resources may be helpful.

More about JavaScript Security: https://medium.com/@dhtmlx/security-of-javascript-applications-1c95cd2ce533

# Different Types of Websites
You can build different kinds of websites/ web apps.

Specifically, there are three major types you can differentiate:

Static Websites (just HTML + CSS + JS)

Single-Page-Applications (SPAs, HTML + CSS + JS with only one HTML page being served, client-side JS is used to re-render the page dynamically)

Dynamic/ Server-side rendered Web Applications: Websites where the HTML pages are created dynamically on the server (e.g. via templating engines like EJS).

You find a more detailed comparison here: https://academind.com/learn/web-dev/dynamic-vs-static-vs-spa/

When deploying such websites, it's important to understand that sites with NO server-side code (i.e. Static Websites and SPAs), required only a static host (e.g. AWS S3, Firebase Hosting).

Pages where HTML is generated dynamically on the server require a host that is capable of executing the server-side code (i.e. a server that supports NodeJS, PHP or whatever language is being used).

# Injecting Script Imports Into HTML Automatically
In the previous lecture, we manually adjusted the HTML files to import the generated JavaScript files.

For most projects, this is fine - you're probably not going to push out a new version of your scripts every few minutes.

But you could also automate this process if you wanted to - with the help of a special plugin for Webpack: The HtmlWebpackPlugin.

You can find a detailed documentation on how to use it on this page: https://github.com/jantimon/html-webpack-plugin

# Performance 
    Performance can be a lot of things
        Startup Time
            How long does it take to "see something" on the screen?
            How quickly is a user able to interact with the page?
        Runtime Performance
            How smooth does the application run(are there freezes or lag)?
            How smooth do animations play, is there any "visual lag"?
            Are there any memory leaks, is the page getting slower over time?
    Performance is influenced by a lot of factors! CSS code, HTML code and of course also JavaScript code.  Also influenced by server speed/configuration.

What influences JavaScript performance?
    Startup time
        How fast does the script load(and execute)?
    Runtime performance
        How much "work" does the script do?
        How much memory is occupied?
    
Startup time - Bundle/Script size: Delays initial parsing/execution. Number of Http Roundtrips(e.g. because of non-bundled code, third party library CDNs): Delays initial parsing/execution.

Runtime - Optimize Code Execution, DOM Access: Avoid unnecessary code execution, especially unnecessary DOM operations/repaints.  Avoid Memory Leaks: Can crash your application in the worst case, but will slow it down in all cases.  Find Code Alternatives with better Performance: Especially important for "high-frequency" code parts.  Micro Optimizations in your code: Optimize for a very specific use case(e.g. data structures for frequent access/changes).

# Measuring & Auditing
    Don't guess -> Measure - Check roundtrips + script size and set script/bundle size budgets.
    Measure performance with dev tools
    Explore best practices, patterns and benchmarks.
    Measure production ready code not development.

    You can measure code using some code methods like performance.now() Add this to your code (during development/teseting) and check the execution time(difference) for certain operations.
    Use the browser devtools - Use the many features of browser devtools to detect unncessary code executions, http requests and measure execution time + memory leaks.
    jsperf.com - Compare alternative code snippets and measure performance.
    webpagetest.com - Test your entire (live) web page to detect optimization potential.

    Lastly google web site performance

### Server-side Performance Optimizations
In this course section we - of course - discussed JavaScript performance.

When it comes to the overall performance of a website, it's not just JavaScript that matters though. Besides other client-side optimizations (e.g. CSS, images => see: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency), it's also the server-side where you can improve performance.

Executing code on the server-side (e.g. NodeJS) is one thing but the server configuration is also important.

Specifically, there are three main areas of improvement which you might want to look into:

Compression of served assets

Caching (client-side and server-side)

HTTP/2

Compression
Compression is about zipping static assets (CSS, JS, images) before serving them. Modern browsers know how to unzip such files and will automatically do so. Since zipped assets are transferred, less data is sent from server to client => Faster load time.

How you set up compression depends on which server/ service you're using. For example on Firebase, static assets are automatically compressed.

When having your own NodeJS server-side code, you would have to manually ensure that static assets are compressed (https://github.com/expressjs/compression).

Caching
Caching is a complex topic - it's about saving data or files for re-use and it can be done on different levels.

For example, browser automatically cache files (e.g. JS files) for you - based on the caching headers set by the serving host (https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control). So controlling these headers on the server-side config, allows you to control how browsers will cache such files. This can help you avoid unnecessary data transfer but of course you also have to make sure that visitors of your site don't miss out on important updates.

Server-side caching is all about storing data you work with on the server (e.g. fetched from a database) such that multiple requests requesting the same data can get that cached data.

You can learn more about caching here: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching

And here: https://wp-rocket.me/blog/different-types-of-caching/

HTTP/2
HTTP/2 is the latest "form" of the Http protocol and unlike HTTP 1, it allows for "server push". That means that servers can push required assets/ files actively to a client (instead of waiting for the client to request them).

You can learn more about it here: https://developers.google.com/web/fundamentals/performance/http2

### Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

---

The following resources may be helpful.

Google Performance Docs: https://developers.google.com/web/fundamentals/performance/rendering

Chrome DevTools Performance Docs: https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference

Chrome DevTools Memory Docs: https://developers.google.com/web/tools/chrome-devtools/memory-problems

### Tools needed for testing
    Test Runner - Unit + integration testing
        Execute your test, summarize results. e.g. Mocha
        Assertion Library - Unit + Integration testing - defining testing logic, conditions.
        eg. Chai
    e.g Jest

    Headless browser - e2e testing
        Simulates browser interaction
        e.g. Puppeteer

### Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).