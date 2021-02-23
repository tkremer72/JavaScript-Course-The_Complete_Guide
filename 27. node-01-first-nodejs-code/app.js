//import the dotenv 
require('dotenv').config()
//import express
const express = require("express");
const bodyParser = require('body-parser');


const locationRoutes = require('./routes/location');

//create an express app
const app = express();
//set the port
// const port = process.env.PORT || 8080;

//Set the view engine
// app.set('view engine', 'ejs');
// app.set('views', 'views');

//Order matters

//Parse the body of the request
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set the headers of the request
// app.use((req, res, next) => {
//   res.setHeader("Content-Type", "text/html");
//   next();
// });

// //send the request
// app.use((req, res, next) => {
//   const userName = req.body.username || "Unknown User";
//   res.render('index', {
//      user: userName
//   });
// });
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, PATCH, DELETE, OPTIONS');
  next();
});
app.use(locationRoutes);

app.listen(process.env.PORT);
