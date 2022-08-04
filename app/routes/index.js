const router = require('express').Router();

const tasksRouter = require('./TaskRouter');

router.use('/tasks', tasksRouter)



module.exports = router;

