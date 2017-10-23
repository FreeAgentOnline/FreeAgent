const express = require('express');
const passportService = require('../config/passport');
const passport = require('passport');
const Result = require('../models/Result');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  // Initializing route groups
  const router = express.Router();

  // *************************************
  //  Result-specifc routes
  // *************************************

  // View all results
  router.get('/result', (req, res) => {
    Result.find().sort({'username': 1})
    .then(data => res.status(200).send(data))
    .catch(err => res.send(err))
  })
  // Create a new result for given user
  router.post('/result/user/:username', (req, res) => {
    Result.create({
      username: req.params.username,
      event: req.body.event,
      measurement: req.body.measurement,
      unit: req.body.unit,
      date: req.body.date,
      performance: req.body.performance,
      location: req.body.location || '',
      reference: req.body.reference || ''
    })
    .then(data => {
      console.log('data', data);
      res.status(200).send(data)
    })
    .catch(err => { res.send(err) })
  })
  // View all results for given user
  router.get('/result/user/:username', (req, res) => {
    Result.find({ username: req.params.username}).sort({'event': 1})
    .then(data => { res.status(200).send(data) })
    .catch(err => { res.send(err) })
  })
  // View a specific result
  router.get('/result/:_id', (req, res) => {
    Result.findOne({ _id: req.params._id })
    .then(data => { res.status(200).send(data) })
    .catch(err => { res.send(err) })
  })
  // Update a specific result
  router.patch('/result/:_id', (req, res) => {
    Result.findOneAndUpdate({ _id: req.params._id }, {
      $set: {
        event: req.body.event,
        measurement: req.body.measurement,
        unit: req.body.unit,
        date: req.body.date,
        performance: Number(req.body.performance),
        location: req.body.location || '',
        reference: req.body.reference || ''
      }
    }, { new: true })
    .then(data => { res.status(200).send(data) })
    .catch(err => { res.send(err) })
  })
  // Delete a specific result
  router.delete('/result/:_id', (req, res) => {
    Result.deleteOne({ _id: req.params._id })
    .then(data => { res.status(200).send(data) })
    .catch(err => { res.status(500).send(err) })
  })

  app.use('/api', router);

};
