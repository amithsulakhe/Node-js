import express from "express";
import mongoose from "mongoose";
const Port = 5173;
const app = express();
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/users").then(() => {
  console.log("created successfully");
});
const userSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    minlength: 10,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    minlength: 10,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
});
const User = mongoose.model("userdata", userSchema);

console.log(User);
app.get("/", async (req, res) => {
  try {
    const getusers = await User.find();
    console.log(getusers);
    res.status(200).send(getusers);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/user", async (req, res) => {
  try {
    const users = new User(req.body);
    const createuser = await users.save();
    res.status(201).send(createuser);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(Port, () => {
  console.log("connection successfully");
});
