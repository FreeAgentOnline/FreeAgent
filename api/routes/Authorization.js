const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
  res.status(200).send('FreeAgent API');
})

// *************************************
//  Authorization routes
// *************************************

router.post('/user/login', (req, res) => {
  User.findOne({ email: req.body.email })
  .then(data => {
    if (data.password === req.body.password) {
      res.send('Success');
  })
  .catch(err => { res.send(err) })
})

module.exports = router;
