const express = require('express');
const router = express.Router();
const User = require('../models/User');

// *************************************
//  User-specific routes
// *************************************

// View all users
router.get('/user', (req, res) => {
  User.find()
  .then(data => res.status(200).send(data))
  .catch(err => res.send(err))
})
// Create a new user
router.post('/user', (req, res) => {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    bio: ''
  })
  .then(data => { res.status(200).send(data) })
  .catch(err => { res.send(err) })
})
// View a specific user
router.get('/user/:_id', (req, res) => {
  User.findOne({ _id: req.params._id })
  .then(data => { res.status(200).send(data) })
  .catch(err => { res.send(err) })
})
// Update a specific user
router.patch('/user/:_id', (req, res) => {
  User.findOneAndUpdate({ _id: req.params._id }, {
    $set: {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      bio: req.body.bio
    }
  }, { new: true })
  .then(data => { res.status(200).send(data) })
  .catch(err => { res.send(err) })
})
// Delete a specific user
router.delete('/user/:_id', (req, res) => {
  User.deleteOne({ _id: req.params._id })
  .then(data => { res.status(200).send(data) })
  .catch(err => { res.status(500).send(err) })
})

module.exports = router;
