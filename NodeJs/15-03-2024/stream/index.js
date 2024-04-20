const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const fs = require("fs");

  // first type
  // const rstream = fs.createReadStream("index.txt");
  // rstream.on("data", (chunkdata) => {
  //   res.write(chunkdata);
  // });
  // rstream.on("end", () => {
  //   res.end();
  // });

  // rstream.on("error", (err) => {
  //   console.log(err);
  //   res.write("no found");
  // });

  // second type using pipe

  const rstream = fs.createReadStream("index.txt");
  rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");
