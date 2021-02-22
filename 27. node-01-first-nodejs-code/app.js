//import express 
const express = require('express');

//create an express app
const app = express();

//Order matters
app.use((req, res, next) => {
     res.setHeader('Content-Type', 'text/html');
     next();
});

app.use((req, res, next) => {
     res.send('<h1>Hello World!</h1>')
});



app.listen(3000)