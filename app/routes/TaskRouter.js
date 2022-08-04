const router = require('express').Router();
const taskController = require('../controllers/TaskController');
const middleware = require('../middleware/middleware');

router.get('', middleware, taskController.readTasks);
router.post('', middleware, taskController.createNewTask);
router.put('/:id', middleware, taskController.updateTaskById);
router.delete('/:id', middleware, taskController.deleteById);


module.exports = router;