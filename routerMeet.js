const express = require('express');
const passportService = require('./config/passport');
const passport = require('passport');
const Meet = require('./models/Meet');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  // Initializing route groups
  const router = express.Router();

  // *************************************
  //  Meet-specifc routes
  // *************************************

  router.get('/meet', (req, res) => {
    Meet.find({})
    .then(data => { res.status(200).send(data) })
    .catch(err => { res.status(500).send(err) })
  })

  router.get('/meet/:id', (req, res) => {
    Meet.findById({_id: req.params.id})
    .then(data => { res.status(200).send(data) })
    .catch(err => { res.status(500).send(err) })
  })

  router.post('/meet', (req, res) => {
    Meet.create({
      name: req.body.name,
      date_start: req.body.date_start,
      date_end: req.body.date_end,
      location_name: req.body.location_name,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      zip: req.body.zip,
      cost: req.body.cost,
      url: req.body.url
    })
    .then(data => { res.status(200).send(data) })
    .catch(err => {
      console.log("ERR: ", err);
      res.status(400).send(err)
    })
  })

  router.delete('/meet/:id', (req, res) => {
    Meet.deleteOne({ _id: req.params.id })
    .then(data => { res.status(200).send(data) })
    .catch(err => { res.status(500).send(err) })
  })

  router.put('/meet/:id', (req, res) => {
    Meet.update({_id: req.params.id}, {
      name: req.body.name,
      date_start: req.body.date_start,
      date_end: req.body.date_end,
      location_name: req.body.location_name,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      zip: req.body.zip,
      cost: req.body.cost,
      url: req.body.url
    }, { new: true })
    .then(data => { res.status(200).send(data) })
    .catch(err => { res.status(500). send(err) })
  })

  app.use('/api', router);

};
