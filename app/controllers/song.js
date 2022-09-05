const {createSong, getSongByTitle, getAllSongs} = require('../services/song')

const getSong = async (req, res, next) => {
    try {
        const song = await getSongByTitle(req.params.url_title)
        res.send(song)
    } catch (e) {
        next(e)
    }
}

const getSongsList = async (req, res, next) => {
    try {
        const song = await getAllSongs(req.params.url_title)
        res.send(song)
    } catch (e) {
        next(e)
    }
}

const addNewSong = async (req, res, next) => {
    try {
        // const song = await createSong({ title: decodeURI(req.query.title), url_title: req.params.url_title})
        const song = await createSong({ title: 'Дякуйте Господу (Псалом 117)', url_title: req.params.url_title})
        res.send(song)
    } catch (e) {
        next(e)
    }
}

module.exports = {addNewSong, getSong, getSongsList};
