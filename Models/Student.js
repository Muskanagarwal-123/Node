const mongoose = require("mongoose")

var StudentModel = new mongoose.Schema({
  StudentName: String,
  Class: Number,
  Roll: Number,
  Subject: String,
});

module.exports = mongoose.model('Student', StudentModel );
