const fs = require("fs");

// creating write file
fs.writeFileSync("read.txt", "My name is Amith R sulakhe");

// modifying file
fs.writeFileSync("read.txt", "My name is Amith R sulakhe,Thank You");

// reading file
const buf_data = fs.readFileSync("read.txt");

//converting buffer data in readable data
out_data = buf_data.toString();
console.log(out_data);

fs.renameSync("read.txt", "readwrite.txt");

// appending data

fs.appendFileSync("readwrite.txt", "My name is Ajay R sulakhe,Thank You");
