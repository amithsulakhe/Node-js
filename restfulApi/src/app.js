const express = require("express");
const app = express();
const Students = require("./db/models/students");
require("./db/conn");
app.use(express.json());
const port = process.env.Port || 8000;
app.get("/", (req, res) => {
  res.send("Hello this is Home Page");
});

app.post("/students", (req, res) => {
  const student = new Students(req.body);
  student
    .save()
    .then(() => {
      res.status(201).send(student);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// create data
// using async and await
app.post("/students", async (req, res) => {
  try {
    const student = new Students(req.body);
    const createuser = await student.save();
    res.status(201).send(createuser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// getting data
app.get("/students", async (req, res) => {
  try {
    const data = await Students.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(401).send(err);
  }
});

// getting data based on particular id
app.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const particularData = await Students.find({ _id });
    if (!particularData) {
      return res.status(404).send();
    } else {
      res.status(200).send(particularData);
    }
  } catch (err) {
    res.status(401).send(err);
  }
});

// update particular data based on id

app.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedData = await Students.findByIdAndUpdate({ _id }, req.body, { new: true });
    res.status(200).send(updatedData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete data based on particular id

app.delete("/students/:id", async (req, res) => {
  try {
    const deletedData = await Students.findByIdAndDelete(req.params.id);
    if (!deletedData) {
      res.status(400).send(deletedData);
    }
    res.send(deletedData);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log("connection successfully");
});
