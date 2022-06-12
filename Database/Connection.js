const mongoose = require("mongoose");
const URL =
  "mongodb+srv://muskan_123:Muskan123@cluster0.sp6zi.mongodb.net/Database1?retryWrites=true&w=majority";

const connectDb = async () => {
  await mongoose.connect(URL);
  console.log("db connected");
};

module.exports = connectDb;
