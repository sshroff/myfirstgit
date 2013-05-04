var http = require('http');
var port = process.env.PORT || 9898;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World, my first git app\n');
}).listen(port);
console.log('Server running at Azure');