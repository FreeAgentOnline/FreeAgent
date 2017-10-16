const mongoose = require('mongoose');

const meetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date_start: {
        type: String,
        required: true,
    },
    date_end: {
        type: String,
        required: true,
    },
    location_name: {
        type: String,
    },
    street: {
        type: String,
    },
    city: String,
    state: String,
    country: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
    },
    url: Number
    });

    const Meet = mongoose.model('Meet', meetSchema);

    module.exports = Meet;
