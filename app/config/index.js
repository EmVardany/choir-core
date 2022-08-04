module.exports = {
    host: {
        port: process.env.PORT || '5000',
    },
    mongo: {
        url: process.env.MONGO_HOST || ''
    }
}