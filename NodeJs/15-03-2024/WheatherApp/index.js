const fs = require("fs");
const http = require("http");
const requests = require("requests");
const homeFile = fs.readFileSync("index.html", "utf-8");
const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%tempVal%}", orgVal.main.temp);
  temperature = temperature.replace("{%tempMin%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%tempMax%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%location%}", orgVal.name);
  return temperature;
};
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests("https://api.openweathermap.org/data/2.5/weather?q=pune&appid=1576cc90b9e832bdcafb5105eadae9c5")
      .on("data", (chunk) => {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        const realData = arrData.map((val) => replaceVal(homeFile, val)).join("");
        res.write(realData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection losed", err);
        res.end();
      });
  }
});

server.listen(8000, "127.0.0.1");
