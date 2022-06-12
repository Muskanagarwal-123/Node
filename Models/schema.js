const mongoose = require("mongoose")

var SomeModelSchema = new mongoose.Schema({
  data: String,
  meta: Number,
});

// Compile model from schema
module.exports = mongoose.model('SomeModel', SomeModelSchema );
