//Using the http request module

const http = require('http');

const server = http.createServer((request, response) => {
     response.setHeader('Content-Type', 'text/html')
     response.write('<h1>Hello There!</h1>');//Server side script
     response.end();
});

server.listen(3000);