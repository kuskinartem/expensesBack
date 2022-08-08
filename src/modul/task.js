const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskScheme = new Schema({
    text: String,
    cost: Number,
    date: {
      type: Date,
      default: new Date().toLocaleDateString()
    }
  });

  module.exports = Task = mongoose.model("expenses", taskScheme);