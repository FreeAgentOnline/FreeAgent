const express = require('express');
const passportService = require('../config/passport');
const passport = require('passport');
const Meet = require('../models/Meet');

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


//find a meet by search query


//run this in CLI to import data into database: mongoimport --db free-agent --collection meets --file allMeets.json
//run this in mongo to set search fields in data: db.meets.createIndex({ name: "text", venue: "text", city: "text", state: "text", country: "text"})

  router.get('/search/meet/:query', (req, res) => {
    let query = req.params.query;

    Meet.find({ $text: { $search: query } }
        )
    .then(data => { res.status(200).send(data) })
    .catch(err => { res.status(500).send(err) })
  })
////////////////////////////

  router.get('/meet/:meetId', (req, res) => {
    Meet.findById({_id: req.params.meetId})
    .then(data => { res.status(200).send(data) })
    .catch(err => { res.status(500).send(err) })
  })

  router.post('/meet', (req, res) => {
    Meet.create({
        name: req.body.name,
        date_start: req.body.date_start,
        date_end: req.body.date_end,
        cost: req.body.cost,
        venue: req.body.venue,
        city: req.body.city,
        state:req.body.state,
        abrev: req.body.abrev,
        country: req.body.country,
        url: req.body.url,
        lat: req.body.lat,
        lng: req.body.url
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
        cost: req.body.cost,
        venue: req.body.venue,
        city: req.body.city,
        state:req.body.state,
        abrev: req.body.abrev,
        country: req.body.country,
        url: req.body.url,
        lat: req.body.lat,
        lng: req.body.url
    }, { new: true })
    .then(data => { res.status(200).send(data) })
    .catch(err => { res.status(500). send(err) })
  })

  app.use('/api', router);

};
