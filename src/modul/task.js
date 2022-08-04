const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskScheme = new Schema({
    text: String,
    cost: Number,
    date: String
  });

  module.exports = Task = mongoose.model("expenses", taskScheme);