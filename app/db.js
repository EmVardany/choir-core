import config from './config'

const mongoose = require('mongoose');

mongoose.connect(config.mongo.url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const client = mongoose.connection;

module.exports = client;