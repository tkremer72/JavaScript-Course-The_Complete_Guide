//import express
const express = require("express");
const bodyParser = require('body-parser');

//create an express app
const app = express();

//Set the view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//Order matters

//Parse the body of the request
app.use(bodyParser.urlencoded({ extended: false }));

//Set the headers of the request
app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next();
});

//send the request
app.use((req, res, next) => {
  const userName = req.body.username || "Unknown User";
  res.render('index', {
     user: userName
  });
});

app.listen(3000);
