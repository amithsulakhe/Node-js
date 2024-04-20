const mongoose = require("mongoose");

// it create class name database conncetion into localhost 27017
mongoose
  .connect("mongodb://localhost:27017/class")
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log(err));

// // it is schema for checking datatypes
// const playListSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   Date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // it is create collection name called playlist into playlists see in compass
// const PlayList = new mongoose.model("Playlist", playListSchema);

// for inserting one object or document
// const createDocument = async () => {
//   try {
//     let reactPlaylist = new PlayList({
//       name: "Full stack js",
//       age: 28,
//     });
//     const result = await reactPlaylist.save();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// createDocument();

// for inserting many Documents

// const createDocument = async () => {
//   try {
//     const jsPlaylist = new PlayList({
//       name: "Javascript",
//       age: 30,
//     });
//     const mongodbPlaylist = new PlayList({
//       name: "Mongo Db",
//       age: 32,
//     });
//     const mongoosePlaylist = new PlayList({
//       name: "Mongoose",
//       age: 35,
//     });

//     const result = await PlayList.insertMany([jsPlaylist, mongodbPlaylist, mongoosePlaylist]);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// createDocument();

// for reading data
// const readData = async () => {
//   const result = await PlayList.find({ name: "Mongoose" });
//   //   .select({ age: 1 }).limit(1);
//   console.log(result);
// };
// readData();

// comparision operator in mongoose

// const readData = async () => {
//   const result = await PlayList.find({
//     age: {
//       $lt: 25,
//     },
//   });
//   //   .select({ age: 1 }).limit(1);
//   console.log(result);
// };
// readData();

// logical operator and or not
// const readData = async () => {
//   const result = await PlayList.find({ $or: [{ name: "Mongoose" }, { age: "22" }] });
//   //   .select({ age: 1 }).limit(1);
//   console.log(result);
// };
// readData();

// to count totaldocuments and order in ascending to descending and descending to ascending

// note:For ascending 1 for descending -1
// const readData = async () => {
//   const result = await PlayList.find().sort({ name: 1 });
//   //   .countDocuments();
//   //   .select({ age: 1 }).limit(1);
//   console.log(result);
// };
// readData();

// for updataing document

// it doesn't show which modified  1st type
// const updateDocument = async (_id) => {
//   try {
//     const result = await PlayList.updateOne({ _id }, { name: "amith js" });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// updateDocument("65f7f698e44b3401b6a6f84c");

// 2nd type {new :true} given it returns presently modified value

// const updateDocument = async (_id) => {
//   try {
//     const result = await PlayList.findByIdAndUpdate({ _id }, { name: "rajesh js" }, { new: true });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// updateDocument("65f7f698e44b3401b6a6f84c");

// delete document 1st method

// const deleteDocument = async (_id) => {
//   try {
//     const result = await PlayList.deleteOne({ _id });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// deleteDocument("65f7f698e44b3401b6a6f84d");

//2nd method
// const deleteDocument = async (_id) => {
//   try {
//     const result = await PlayList.findByIdAndDelete({ _id });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// deleteDocument("65f7f698e44b3401b6a6f84c");

// validations
// it is schema for checking datatypes
const playListSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    unique: true,
    minlength: 2,
    maxlength: 25,
  },
  age: {
    type: Number,
    // custom validation and must be use callback name as validate only
    validate(val) {
      if (val < 0) {
        throw new Error("Number must be grater than 0");
      }
    },
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

// it is create collection name called playlist into playlists see in compass
const PlayList = new mongoose.model("Playlist", playListSchema);

const createDocument = async () => {
  try {
    const mongoosePlaylist = new PlayList({
      name: "Pound",
      age: 38,
    });

    const result = await PlayList.insertMany([mongoosePlaylist]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocument();
