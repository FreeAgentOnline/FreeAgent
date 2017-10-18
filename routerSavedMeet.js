const express = require('express');
const passportService = require('./config/passport');
const passport = require('passport');
const SavedMeet = require('./models/SavedMeet');

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
  router.post('/meet/:meetId/save/user/:userId', (req, res) => {
    SavedMeet.create({
      userId: req.params.userId,
      meetId: req.params.meetId,
      isScheduled: false,
      name: req.body.name,
      date_start: req.body.date_start,
      date_end: req.body.date_end,
      country: req.body.country,
      location_name: req.body.location_name || '',
      street: req.body.street || '',
      city: req.body.city || '',
      state: req.body.state || '',
      zip: req.body.zip || '',
      cost: req.body.cost || '',
      url: req.body.url || '',
    })
    .then(data => { res.status(200).send(data) })
    .catch(err => { res.send(err) })
  })
  // View a save from specific user
  router.get('/meet/save/user/:userId', (req, res) => {
    SavedMeet.find({ userId: req.params.userId })
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
