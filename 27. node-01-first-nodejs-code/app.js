//import express
const express = require("express");
const bodyParser = require('body-parser');

//create an express app
const app = express();

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
  res.send(
    `<h1>Hi ${userName}!</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`
  );
});

app.listen(3000);
