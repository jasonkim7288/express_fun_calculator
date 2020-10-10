const mongoose = require('mongoose');

const CalcHistory = new mongoose.Schema({
  expression: {
    type: String,
    required: true
  },
  result: {
    type: Number,
    required: true
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('CalcHistory', CalcHistory);