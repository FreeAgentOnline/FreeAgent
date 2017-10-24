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
  cost: Number,
  venue: String,
  city: String,
  state: String,
  abrev: String,
  country: {
      type: String,
      required: true
  },
  url: String,
  lat: Number,
  lng: Number
});

const savedMeet = mongoose.model('savedMeet', savedMeetSchema);

module.exports = savedMeet;
