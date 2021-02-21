
const intervalId = setInterval(() => {
     console.log('Your second timer worked!' + ':' + ' ' + 'Sending Analytics.........')
}, 2000);
//use the same button to stop the interval timer
document.getElementById('stop-analytics-button').addEventListener('click', () => {
     clearTimeout(intervalId);
    });
//Do the math to figure out how many seconds old I am
//how many seconds are in a minute
inAMinute = 60;
//how many seconds in an hour
inAnHour = 60 * inAMinute;
//print the result of seconds in an hour to the console
console.log(`There are ${inAnHour} seconds in an hour.`);
//seconds in a day
inADay = 24 * inAnHour;
//print result of seconds in a day to console
console.log(`There are ${inADay} seconds in a day.`);
//seconds in a week
inAWeek = 7 * inADay;
//print seconds per week in console
console.log(`There are ${inAWeek} seconds in a week.`);
//seconds per year
inAYear = 52 * inAWeek;
//print results of seconds per year
console.log(`There are ${inAYear} seconds in a year.`);
//my age in seconds
myAgeInSeconds = 49 * inAYear;
//print my age in seconds
console.log(`I am ${myAgeInSeconds} seconds old.`);

//Create a function to draw a cat ten times and print it in the console.
var drawCats = function(num) {
     for(var i = 0; i < num; i++) {
          console.log(i + " =^.^=");
     }
}
//call the draw cats function
drawCats(10);

