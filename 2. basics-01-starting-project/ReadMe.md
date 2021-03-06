# JavaScript - The Complete Guide 
What is JavaScript ?
     JavaScript is a dynamic, weakly typed programming language that is interpreted on the fly or a compiled language.  JavaScript is a hosted language that runs in different environments like the browser.  JavaScripts' most prominent use case is to run in a browser ie on a webpage. 

# Here are some common questions about this course:

## How long will it take me to complete the course?
This is impossible to answer, seriously. An online course is not a sprint - it's a marathon. You can certainly rush through the course by ramping up the video playback speed to 2x and maybe skipping some videos. You'll then only take half the total hours of that course to complete it (or shorter). But chances are you won't learn much if you do that.

Instead, you should go through the videos carefully - pause occasionally and code along on your own. Maybe even go back to lectures or whole modules you completed in the past to validate that you really understood the concepts taught there.

Code along and maybe even explore with your own projects (or deviate the projects shown by me in the course).

These are the things that turn you into a real developer and it will of course take some time to gain confidence with the JavaScript language.

## What are the course prerequisites?
NO JavaScript knowledge is required, basic HTML + CSS knowledge + web dev knowledge is recommended.

You should have a basic understanding of how the web works and which parts are involved (servers, browser, ...). This article + video can get you started: https://academind.com/learn/web-dev/how-the-web-works/

##  Do I need to know anything about JavaScript to start with this course?
Please check the course landing page (and the question right above this one): NO JavaScript knowledge is required. 

## Do I need to know any HTML or CSS to dive into this course?
Please check the course landing page (and the question two questions above this one): Basic HTML + CSS knowledge can help but technically also isn't required.

You should have a basic understanding of how the web works and which parts are involved (servers, browser, ...). This article + video can get you started: https://academind.com/learn/web-dev/how-the-web-works/

## Does this course teach Node.js?
I focus on the browser since we got some visual output there - which in my opinion makes learning more fun. But the language is the same, so what you learn here of course also applies to Node.js.

There are some differences, some APIs (= functionalities) which only work in the browser or only work in Node.js - but I will highlight those and I also have a complete module where I provide a basic introduction to Node.js and how JavaScript works there.

## Which version of JavaScript does this course teach?
The latest version. You learn modern JavaScript in this course!

## Do I need a Mac to follow along?
No, absolutely not - any operating system works. I record the course on a Mac, that does not mean that you have to use one as well. There will be no differences.

## Which browser should I use to follow along?
I recommend using Google Chrome. JavaScript works in all browser but to ensure that everything works just as shown in the videos, you should use the same browser I use there => Chrome.

Later in the course, you'll find a whole module about JavaScript and which features are supported by different browsers. This then allows you to fine-tune your scripts to different browsers (spoiler: In many cases, no adjustments are required!).

## Is XYZ included in the course (e.g. "Is JavaScript security included in the course?")
Please check the course curriculum - you find all the content there. If something isn't listed there at all, chances are it's not included but asking doesn't hurt. But please first look, then ask.

# JavaScript Project 1, Basic Calculator App.  
Downloaded the starter application skeleton, created an app.js file within the scripts folder.  Start adding calculator logic.  To get started and see this page, add in an alert that says this works into the app.js file.  Then link the app.js file to the index.html file so that it will work. Also import the original script file, before the one I added, because the one I added depends on the other to work properly.

### It can be confusing to see that there seem to be two ways of executing a function:
function add() {
  something = someNum + someOtherNum;
}
add() vs add

It's important to understand why we have these "two ways"!

In general, you call a function that you defined by using its name (e.g. add) and adding parentheses (with any parameters the function might need - or empty parentheses if no parameters are required like in the above example).

=> add()

This is how you execute a function from your code. Whenever JavaScript encounters this statement, it goes ahead and runs the code in the function. Period!

Sometimes however, you don't want to execute the function immediately. You rather want to "tell JavaScript" that it should execute a certain function at some point in the future (e.g. when some event occurs).

That's when you don't directly call the function but when you instead just provide JavaScript with the name of the function.

=> someButton.addEventListener('click', add);

This snippet would tell JavaScript: "Hey, when the button is clicked, go ahead and execute add.".

someButton.addEventListener('click', add()); would be wrong.

Why? Because JavaScript would encounter that line when it parses/ executes your script and register the event listener AND immediately execute add - because you added parentheses => That means (see above): "Please execute that function!".

Just writing add somewhere in your code would do nothing by the way:

let someVar = 5;
add
alert('Do something else...');
Why?

Because you just throw the name of the function in there but you don't give any other information to JavaScript. It basically doesn't know what to do with that name ("Should I run that when a click occurs? After a certain amount of time? I don't know...") and hence JavaScript kind of ignores this statement.

## Converting data types.
  Use parseInt on the user input so that javascript converts the text string into a number. This would look like the following parseInt(userInput.value) or you could also use the plus sign with or without the parenthesis as follows.  currentResult = currentResult + +userInput.value or currentResult = currentResult + +(userInput.value). If you need a decimal then parseInt is the best option since the plus sign will give you the best fitting number and not a decimal. You can also convert numbers to a string by adding .toString() to the end of the variable holding the number value. 

  ## You saw the example with a number and a "text number" being added
3 + '3' => '33'

in JavaScript.

That happens because the + operator also supports strings (for string concatenation).

It's the only arithmetic operator that supports strings though. For example, this will not work:

'hi' - 'i' => NaN

NaN is covered a little later, the core takeaway is that you can't generate a string of 'h' with the above code. Only + supports both strings and numbers.

Thankfully, JavaScript is pretty smart and therefore is actually able to handle this code:

3 * '3' => 9

Please note: It yields the number (!) 9, NOT a string '9'!

Similarly, these operations also all work:

3 - '3' => 0

3 / '3' => 1

Just 3 + '3' yields '33' because here JavaScript uses the "I can combine text" mode of the + operator and generates a string instead of a number.

Refactored some code and split code up.  Added the other button functions and called those functions to connect them. 

More operators, when assigning values to variables that are the same on both sides of the = then you can do it two ways, you can use something like result = result or you can use result += instead.  This works for all of the other operators, subtract, multiply and divide. -=, *=, /=.

You  can also use increment and decrement operators to add or subtract 1 from a value, result--, result++.

More data types.  Numbers, Integers, Floats, Strings, Booleans(true, false), Objects which are created with curly braces with key value pairs inside them { name: 'Thomas', age: 31 }, Arrays [ 2, 5, 10 ] which is a list of data. 

## Objects - Common Syntax Gotchas
You learned the correct syntax for creating an object in the last lecture:

const user = {
    name: 'Max',
    age: 30
};
A couple of important things:

You use {} to "group the data" - a semicolon (;) is used after the closing }. On functions, we didn't do that. As a rule of thumb, you can keep in mind that a semicolon is used after {} if the {} are on the right side of the equal sign!

key-value pairs are separated via a comma (,), NOT via a semicolon. Using a semicolon inside of an object (i.e. between {}), would be a syntax error!

Values are assigned to keys/ properties via a colon (:), NOT via an equal sign (=). Using an equal sign inside of an object (i.e. between {}), would be a syntax error!

I.e. this would be WRONG and would throw an error:

const worstPossibleUser = {
    name = 'Max';
    age = 30;

Create a function using an object, using defer in the script tags of the html page tells the browser to load those script tags after loading and parsing the html code first.  Using async will execute the scripts immediately and only after it finishes loading those scripts will it finish parsing the html. Should not use the async unless the script tags don't interact with the web page.  With async a script executes as soon as possible and the order is not guaranteed.

Importing JavaScript - Summary
Attached, you find summary slides regarding how you may import/ add JavaScript to your web page.

The following graphical summary is also part of those slides.

### Adjusting VSC settings - https://code.visualstudio.com/docs/getstarted/settings

# Mastering (JavaScript) Development
Write code efficiently: 

  Work in a productive environment(i.e. IDE, editor)
  Auto-format code & use shortcuts
  Use auto-completion and hints
  Explore extensions and settings.

Find Help:

  Use MDN
  Learn how to google(seriously!)
  Ask proper questions, help others
  Trial & error
  Debug your code

Debug Your Code:

  Read and utilize error messages
  Use console.log() to gain insights into your code (flow)
  Use the (Chrome) debugging tools
  Use your IDEs debugging capabilities

  ### More On Errors
    Syntax errors - watch your IDE, it will detect and notify you of errors, if you hover over the squiggly lines you can get a hint of what is wrong.  Syntax errors while trivial can break your code and do happen all the time.  Some syntax errors the IDE won't tell you about. For those you can use the Chrome developer tools in incoginto mode to remove anything not related to your code and look within the console first. 

### The ECMAScript Standard
ECMAScript (the language "behind" JavaScript) is under active development and the current progress and active standard is of course documented.

You find a link on this page: https://www.ecma-international.org/publications/standards/Ecma-262.htm

Please note: This document is absolutely NOT meant to be learned by heart or to be used as a developer. Rather it's important to browser vendors.

Still, if you're interested in getting a glimpse behind the scenes, this document might be interesting.

An example of googling questions properly would be if you wanted to learn more about the parseInt method, you would type in the search bar javascript convert string to number.  Start off with the language you are in then describe what you are trying to do, use keywords.

I can also use the console in Chrome developer tools, on the sources tab, pages and select that page that is executing my javascript and set up break points and step over my code while looking into what each step is doing at the breakpoints.  I can also add watchers where I can watch what is happening, this would allow me to keep track of things that change as I work on fixing my code. 

Conditional break points are breakpoints that allow you to create a breakpoint based on a condition where the code execution will only pause if that condition is met.  You can also set breakpoints based on other conditions such as event listeners. 

I can test my fixes directly in the console under the sources tab before making any changes in the actual code via the IDE.

Lastly I can also debug tools within the IDE itself.  For that I should have the chrome debugger installed.

### Working with Control Structures (if Statements, Loops, Error Handling)
    Conditional Statements (if statements) & Expressions:

      == equality operator - equal to something - check for value equality e.g. a == b

      != inequality operator - not equal to something - check for value inequality e.g. a != b

      === and !== operator - value and type (in)equality - check for value in(equality) e.g. a === b a is equal to b or a !== a is not equal to b. In JavaScript, I should prefer this triple equal sign operator over the double equal sign operator. 

      > & <  operator - value being greater or smaller = check for value being more or less than e.g. a > b or a < b

      >= & <= operator - value greater or equal or smaller or equal - checks to see if the value is greater than or equal to and less than or equal to e.g. a >= b or a <= b

      ! operator - value not true - checks to see if something is not true e.g. !a or not a

# Using Booleans in Conditions & More on Text Comparisons

Understanding the "Condition"
Always keep in mind that condition in

if (condition) { ... }
simply has to be a boolean value.

Often, you'll generate such a boolean value with the help of ===, >, < etc. All these operators yield boolean values (without changing the variables/ values you're using them on).

Since if only wants a boolean, you of course don't have to use such an operator. If you already got a variable that holds a boolean, you can use it without any extra operator.

Example:

const isLoggedIn = true;
if (isLoggedIn) {
    // This code will execute because isLoggedIn is true => A valid condition
}
You could write

const isLoggedIn = true;
if (isLoggedIn === true) {
    ...
}
but that would be redundant. You'd generate another new boolean where you already got one.

You can use the ! operator to negate ("invert") the value:

const isLoggedIn = true;
if (!isLoggedIn) {
    // This code will NOT execute because isLoggedIn is true but ! inverts it (in this check)
} else {
    // This would execute because !isLoggedIn yields false => else block executes
}
Again, that would be similar to:

const isLoggedIn = true;
if (isLoggedIn !== true) {
    // This would NOT execute
} else {
    // This would execute because isLoggedIn is true and hence !== true yields false
}
But again, that would be redundant.

More on Text (String) Comparisons
Strings can also be compared with greater than (>) or lower/ smaller than (<) operators.

JavaScript compares strings based on standard lexicographical ordering, using Unicode values.

That means that b is greater than a for example.

JavaScript always looks at the first character and only considers other characters if the first character is similar. In addition, capital characters are considered to be smaller than lowercase characters.

See these examples:

'ab' > 'aa' // true
'a' > 'B' // true
'a' > 'b' // false

### Operator precendence
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

