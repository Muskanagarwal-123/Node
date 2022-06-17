const mongoose = require("mongoose");
const URL =
  "mongodb+srv://muskan_123:Muskan123@cluster0.sp6zi.mongodb.net/Database2?retryWrites=true&w=majority";

const collegeDb = async () => {
  await mongoose.connect(URL);
  console.log("College db connected");
};

module.exports = collegeDb;
