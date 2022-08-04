const client = require('../db')

const getUsers = async () => {
    try {
        const users = client.collection('users')
        return users;
    } catch (e) {
        console.log("could not connect", e);
    }
}

module.exports = getUsers;