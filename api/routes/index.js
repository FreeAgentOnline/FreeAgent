const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Result = require('../models/Result');
const Meet = require('../models/Meet');


router.get('/', (req, res) => {
  res.status(200).send('FreeAgent API');
})

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

// *************************************
//  Result-specifc routes
// *************************************

// View all results
router.get('/result', (req, res) => {
  Result.find()
  .then(data => res.status(200).send(data))
  .catch(err => res.send(err))
})
// Create a new result for given user
router.post('/result/user/:userId', (req, res) => {
  Result.create({
    userId: req.params.userId,
    event: req.body.event,
    measurement: req.body.measurement,
    unit: req.body.unit,
    date: req.body.date,
    performance: req.body.performance,
    location: req.body.location || '',
    reference: req.body.reference || ''
  })
  .then(data => { res.status(200).send(data) })
  .catch(err => { res.send(err) })
})
// View all results for given user
router.get('/result/user/:userId', (req, res) => {
  Result.find({ userId: req.params.userId})
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

// *************************************
//  Meet-specifc routes
// *************************************
router.post('/meet', (req, res) => {
    console.log('req.body: ', req.body);
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
    .then(data => {
        console.log("DATA: ", data);
        res.status(200).send(data)
    })
    .catch(err => {
        console.log("ERR: ", err);
        res.status(400).send(err)
    })
})


router.delete('/meet/:id', (req, res) => {
    Meet.deleteOne({ _id: req.params.id })
    .then(data => { res.status(200). send(data) })
    .catch(err => { res.status(500). send(err) })

})


module.exports = router;
