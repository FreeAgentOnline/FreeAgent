const express = require('express');
const passportService = require('../config/passport');
const passport = require('passport');
const Team = require('../models/Team');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  // Initializing route groups
  const router = express.Router();

  // *************************************
  //  Team-specifc routes
  // *************************************

  // Create team for given user
  router.post('/team/user/:userId', (req, res) => {
    // if (req.body.events) {
    //   let eventsArr = req.body.events.split(', ');
    // }
    Team.create({
      userId: req.params.userId,
      name: req.body.name,
      location: req.body.location,
      year_start: req.body.year_start,
      year_end: req.body.year_end || '',
      // events: eventsArr ? eventsArr : '',
      description: req.body.description || ''
    })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err))
  })
  // Update team information
  router.patch('/team/:_id', (req, res) => {
    Team.findOneAndUpdate({ _id: req.params._id }, {
      $set: {
        name: req.body.name,
        location: req.body.location,
        year_start: req.body.year_start,
        year_end: req.body.year_end || '',
        // events: eventsArr || '',
        description: req.body.description || ''
      }
    }, { new: true })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500). send(err))
  })
  // Get all teams for given user
  router.get('/team/user/:userId', (req, res) => {
    Team.find({ userId: req.params.userId })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err))
  })
  // Delete team
  router.delete('/team/:_id', (req, res) => {
    Team.deleteOne({ _id: req.params._id })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
  })

  app.use('/api', router);

};
