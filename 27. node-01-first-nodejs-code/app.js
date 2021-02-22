//Using the http request module

const http = require("http");
//sending Http request
// const server = http.createServer((request, response) => {
//      response.setHeader('Content-Type', 'text/html')
//      response.write('<h1>Hello There!</h1>');//Server side script
//      response.end();
// });

const server = http.createServer((request, response) => {
  //parsing the request object
  let body = [];
  request.on("data", (chunk) => {
    body.push(chunk);
  });
  request.on("end", () => {
    body = Buffer.concat(body).toString();
    //console.log(body);
    let userName = 'Unknown User';
    if(body) {
         userName = body.split('=')[1];
    }
    //console.log(request.method, request.url);
    response.setHeader("Content-Type", "text/html");
    response.write(
      `<h1>Hi ${userName}!</h1><form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`
    );
    response.end();
  });
});

server.listen(3000);
