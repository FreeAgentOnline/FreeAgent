const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  first_name: String,
  last_name: String,
  bio: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
