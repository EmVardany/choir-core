const {createSong, getSongByTitle} = require('../services/song')

const getSong = async (req, res, next) => {
    try {
        const song = await getSongByTitle(req.params.url_title)
        res.send(song)
    } catch (e) {
        next(e)
    }
}

const addNewSong = async (req, res, next) => {
    try {
        const song = await createSong({ title: decodeURI(req.query.title), url_title: req.params.url_title})
        res.send(song)
    } catch (e) {
        next(e)
    }
}

module.exports = {addNewSong, getSong};
