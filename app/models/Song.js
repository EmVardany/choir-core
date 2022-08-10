const mongoose = require('mongoose');
const uuid = require('uuid');

const songSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid.v4,
    },
    title: {
        type: String,
    },
    url_title: {
        type: String,
    },

});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
