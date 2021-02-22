// const userName = 'Thomas';
// console.log(`Hi ${userName}!`);

//Using the file system module
const fs = require('fs');
fs.readFile('./user-data/user-data.txt', (error, data) => {
     if(error) {
          console.log(error);
          return;
     } 
     console.log(data.toString());
});


fs.writeFile('./user-data/user-data.txt', 'username=Thomas', error =>  {
     if(error) {
          console.log(error)
     } else {
          console.log('Written to file!')
     }
});


