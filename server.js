const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/home") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("welcome home");
    return res.end();
  } else if (url == "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("Welcome to About Us page");
    return res.end();
  } else if (url == "/node") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write(" Welcome to my Node Js project");
    return res.end();
  }
  res.writeHead(200, { "content-type": "text/plain" });
  res.write("Welcome to my Node Js project");
  res.end();
});

server.listen(4000);
