module.exports = (req, res, next) => {
    if (req.params.userId === 'me') {
        req.params.userId = req.user._id;
    }
    next();
};