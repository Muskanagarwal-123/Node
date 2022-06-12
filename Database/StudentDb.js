const mongoose = require("mongoose");
const URL =
  "mongodb+srv://muskan_123:Muskan123@cluster0.sp6zi.mongodb.net/Database2?retryWrites=true&w=majority";

const studentDb = async () => {
  await mongoose.connect(URL);
  console.log("Student db connected");
};

module.exports = studentDb;
