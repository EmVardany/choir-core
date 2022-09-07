require('dotenv').config();

module.exports = {
    host: {
        port: process.env.PORT || '3000',
        version: process.env.VERSION || '/api/v1'
    },
    mongo: {
        url: process.env.MONGO_HOST || ''
    },
    s3: {
        bucketUrl: process.env.BUCKET_URL || ''
    }
}