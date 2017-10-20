const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  event: {
    type: String,
    required: true
  },
  measurement: {
    type: String,
    required: true,
    enum: ['distance', 'height', 'time', 'points']
  },
  unit: {
    type: String,
    required: true,
    enum: ['m', 'in', 'sec', 'min', 'pts']
  },
  date: {
    type: String,
    required: true
  },
  performance: {
    type: Number,
    required: true
  },
  location: String,
  reference: String
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
