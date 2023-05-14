const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.write("vikash kumar jha");
  res.end();
});

server.listen(4000);
