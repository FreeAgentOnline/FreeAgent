const express = require('express');
const router = express.Router();
const Meet = require('../models/Meet');


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
    .catch(err => { res.status(500).send(data) })
})

router.post('/meet', (req, res) => {
    // console.log('req.body: ', req.body);
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
        // console.log("DATA: ", data);
        res.status(200).send(data)
    })
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
    console.log('REQ BODY ID: ', req.body._id);
    console.log('REQ PARAMS ID: ', req.params.id);

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
    .then(data => {
        console.log("DATA: ", data);
        res.status(200).send(data) })
    .catch(err => { res.status(500). send(err) })
})


module.exports = router;
