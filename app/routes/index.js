const song = require('./song');

module.exports = function(app) {
    app.use(process.env.VERSION, song);
};
