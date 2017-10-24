const express = require('express');
const passportService = require('../config/passport');
const passport = require('passport');
const SavedMeet = require('../models/SavedMeet');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  // Initializing route groups
  const router = express.Router();

  // *************************************
  //  SavedMeet-specific routes
  // *************************************

  // View all saves
  router.get('/meet/save', (req, res) => {
    SavedMeet.find()
    .then(data => res.status(200).send(data))
    .catch(err => res.send(err))
  })
  // Create a new save
  router.post('/meet/:meetId/save/user/:username', (req, res) => {
    SavedMeet.create({
      username: req.params.username,
      meetId: req.params.meetId,
      isScheduled: false,
      name: req.body.name,
      date_start: req.body.date_start,
      date_end: req.body.date_end,
      country: req.body.country,
      venue: req.body.venue || '',
      city: req.body.city || '',
      state: req.body.state || '',
    //   url: req.body.url || '',
    //   cost: req.body.cost || '',
      lat: req.body.lat || '',
      lng: req.body.lng || '',
    })
    .then(data => { res.status(200).send(data) })
    .catch(err => { res.send(err) })
  })
  // View all saves from specific user
  router.get('/meet/save/user/:username', (req, res) => {
    SavedMeet.find({ username: req.params.username })
    .then(data => { res.status(200).send(data) })
    .catch(err => { res.send(err) })
  })
  // Toggle isScheduled on specific save
  router.patch('/meet/save/:_id', (req, res) => {
    SavedMeet.findOne({ _id: req.params._id })
    .then(item => {

      SavedMeet.findOneAndUpdate({ _id: req.params._id }, {
        $set: {
          isScheduled: !item.isScheduled
        }
      }, { new: true })
      .then(data => { res.status(200).send(data) })
      .catch(err => { res.send(err) })

    })
    .catch(err => { res.send(err) })
  })
  // Delete a specific save
  router.delete('/meet/save/:_id', (req, res) => {
    SavedMeet.deleteOne({ _id: req.params._id })
    .then(data => { res.status(200).send(data) })
    .catch(err => { res.status(500).send(err) })
  })

  app.use('/api', router);

};
