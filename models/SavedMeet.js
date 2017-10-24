const mongoose = require('mongoose');

const savedMeetSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  meetId: {
    type: String,
    required: true
  },
  isScheduled: {
    type: Boolean,
    required: true,
    default: false
  },
  name: {
    type: String,
    required: true
  },
  date_start: {
    type: String,
    required: true
  },
  date_end: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  location_name: String,
  street: String,
  city: String,
  state: String,
  zip: String,
  cost: Number,
  url: String
});

const savedMeet = mongoose.model('savedMeet', savedMeetSchema);

module.exports = savedMeet;
