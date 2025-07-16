const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
  /** Route the user to the appropriate page based on url requested */
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/about.html').pipe(res);
  } else if (req.url === '/contact-me') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact-me.html').pipe(res);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(8080);