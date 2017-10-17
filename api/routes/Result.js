const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

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

module.exports = router;
