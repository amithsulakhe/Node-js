const mangoose = require("mongoose");

mangoose
  .connect("mongodb://localhost:27017/students-api")
  .then(() => {
    console.log("connection succeed for database");
  })
  .catch((err) => {
    console.log(err);
  });
