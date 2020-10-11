const mongoose = require('mongoose');

const UsageCount = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 1
  }
})

module.exports = mongoose.model('UsageCount', UsageCount);