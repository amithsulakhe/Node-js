const fs = require("fs");

const objData = {
  name: "amith sulakhe",
  age: 23,
  gender: "male",
};
const jsonData = JSON.stringify(objData);

fs.writeFile("json1.json", jsonData, (err) => {
  console.log("respone");
});

fs.readFile("json1.json", "utf-8", (err, data) => {
  const objData = JSON.parse(data);
  console.log(objData);
});
