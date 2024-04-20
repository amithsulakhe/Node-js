import mongoose from "mongoose";

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
    type: Number,
    minlength: 10,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
});
const User = mongoose.model("userdata", userSchema);
// eslint-disable-next-line no-undef
module.exports = User;
