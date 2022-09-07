const song = require('./song');

module.exports = function (app) {
    app.use('/api/v1', song);
};
