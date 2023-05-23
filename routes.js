const fs = require("fs");

const handler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    return fs.readFile("file.txt", "utf8", (err, msg) => {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head> <title> project </title></head>");

      res.write(
        `<body><h3>${msg}</h3><form method='POST' action='/message'><input type='text' name='message'><button type='submit'>submit</button></form></body>`
      );

      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
    });

    return req.on("end", () => {
      const parsedbody = Buffer.concat(body).toString();
      const message = parsedbody.split("=")[1];
      fs.writeFile("file.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
      });
    });
  }
};

module.exports = handler;
