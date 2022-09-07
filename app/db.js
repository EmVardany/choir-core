const config = require('./config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const connect = (isTest = false, testUrl = '') => new Promise((resolve, reject) => {
    let dbUrl;
    if (isTest && testUrl) dbUrl = testUrl;
    else dbUrl = process.env.MONGO_HOST;
    mongoose.connect(dbUrl,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function(err) {
            if (err) {
                return reject(err);
            }
            console.log('DB Connected')
        },
    );
});

const disconnect = async () => {
    await mongoose.disconnect();
};

module.exports = {
    connect,
    disconnect,
};

