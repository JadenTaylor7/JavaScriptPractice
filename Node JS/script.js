const giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});


const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Steps to get rick rolled</h1>');
  res.write("<p>Have you ever woken up and thought to yourself, <br> 'Man, I really miss Rick.'</p>");
  res.write("Well, it's simple. Just google 'Rick rolll' and you'll find him.")
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});