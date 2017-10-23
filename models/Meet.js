const mongoose = require('mongoose');

const meetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date_start: {
        type: String,
        required: true
    },
    date_end: {
        type: String,
        required: true
    },
        venue: String,
        city: String,
        state: String,
        country: {
            type: String,
            required: true
        },
    url: String,
    lat: Number,
    lng: Number
});

const Meet = mongoose.model('Meet', meetSchema);

module.exports = Meet;
