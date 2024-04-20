// Synchronus conditions

const fs = require("fs");

/// creating new folder structure
// fs.mkdirSync("amith");

// creating file within folder
// fs.writeFileSync("amith/bio.txt", "My name is Amith R Sulakhe");

// reading file
// const data = fs.readFileSync("amith/bio.txt", "utf-8");
// console.log(data);

// deleting file
// fs.unlinkSync("amith/bio.txt");

// delting folder
fs.rmdirSync("amith");
