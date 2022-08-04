const tasks = require('../collections/TasksCollection');


class ToDoServices {

    async getTasks() {
        try {
            const user = await (await tasks())
                .find({})
                .toArray()
            return user;
        } catch (err) {
            console.error(`Something went wrong: ${err}`);
        }
    }
    
    async createTask(data) {
        try {
            await (await tasks())
                .insertOne(data)
        } catch (err) {
            console.error(`Something went wrong: ${err}`);
        }
    }

    async updateTask(id, data) {
        try {
            await (await tasks())
                .findOneAndUpdate(
                    {id: id},
                    {
                        $set: { ...data }
                    }
                )
        } catch (err) {
            console.error(`Something went wrong: ${err}`);
        }
    }

    async deleteTasks(id) {
        try {
            await (await tasks())
                .deleteOne({id: id})
        } catch (err) {
            console.error(`Something went wrong: ${err}`);
        }
    }
}

module.exports = new ToDoServices();