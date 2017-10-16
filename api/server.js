const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/free-agent-api', {
  useMongoClient: true
});

const app = express();;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', require('./routes/index'));

app.use(morgan('dev'));

if (require.main === module) {
  app.listen(8080, function() {
    console.log('App is running on localhost:8080');
  })
}

module.exports = app;
