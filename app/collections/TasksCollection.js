const client = require('../db')

const getTasks = async () => {
    try {
        const users = client.collection('tasks')
        return users;
    } catch (e) {
        console.log("could not connect", e);
    }
}

module.exports = getTasks;