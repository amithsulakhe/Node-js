const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/api.json`, "utf-8");
  if (req.url === "/") {
    res.end("Hello this is Home Page");
  } else if (req.url === "/contact") {
    res.end("Hello this is contact Page");
  } else if (req.url === "/about") {
    res.end("Hello this is about Page");
  } else if (req.url === "/urlapi") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 Error page</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening");
});
