const { default: mongoose } = require("mongoose");
// const mongoose = require("mongoose");
const validator = require("validator");

const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email already exists"],
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error("Please type valid mail");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
    required: true,
    unique: [true, "Phone number already exists"],
  },
  address: {
    type: String,
    required: true,
  },
});

// create new collection

const students = new mongoose.model("Student", studentsSchema);

module.exports = students;
