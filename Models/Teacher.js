const mongoose = require("mongoose")

var TeacherModel = new mongoose.Schema({
  TeacherName: String,
  Gender: String,
  DateOfJoining: Date,
  ClassAlloted: Number,
});

module.exports = mongoose.model('Teacher', TeacherModel );
