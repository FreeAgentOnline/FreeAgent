const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  year_start: {
    type: Number,
    required: true
  },
  year_end: Number,
  // events: [String],
  description: String
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
