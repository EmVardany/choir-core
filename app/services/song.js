const { Song }  = require('../models');

const createSong = async ({ title, url_title }) => {
    let song = new Song({ title: "Я вірую", url_title: url_title });
    console.log(song)
    return await song.save();
}

const getSongByTitle = async (url_title) => {
    const song = await Song.findOne({url_title: url_title})
    console.log(song)
    return song;
}


module.exports = {
    createSong,
    getSongByTitle
};