const secret = require('../config');

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next();
    }

    try {
        const apiKey = req.headers.authorization.split(' ')[1];
        if (!apiKey) {
            return res.status(403).json({message: "Access Error"})
        }
                    
        apiKey === secret.secret ? next() : res.status(403).json({message: `Error: Wrong access key `});

    } catch (e) {
        console.log(e);
        return res.status(403).json({message: "Access Error"})
    }
}