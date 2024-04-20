const express = require("express");
const app = express();
const path = require("path");

// for creating partials it is like component for fixing in page
const hbs = require("hbs");
// const staticPath = path.join(__dirname, "../public");
const tempPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
// to add dynamic data in html it should views folder inside have index.hbs file
app.set("view engine", "hbs");
app.set("views", tempPath);

hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index", {
    Name: "Amith R Sulakhe",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    city: req.query.city,
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    error: "404 page not found",
  });
});

// middleware
// app.use(express.static(staticPath));

// app.get("/", (req, res) => {
//   res.send("<h1>Hello world from Amith sulakhe</h1>");
// });
// app.get("/about", (req, res) => {
//   res.send("Hello world from about page");
// });

app.listen(8000, () => {
  console.log("listening the port 8000");
});
