const normalizeUserId = require('../middlewares/normalizeUserId')
const router = require('express').Router();
const {addNewSong, getSong} = require('../controllers/song')


router.get('/songs/:url_title', normalizeUserId, async(req, res, next) => {
    await getSong(req, res, next)
})

router.post('/songs/:url_title', normalizeUserId, async(req, res, next) => {
    await addNewSong(req, res, next)
})


module.exports = router;
