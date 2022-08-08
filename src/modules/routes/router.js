const express = require('express');
const router = express.Router();

const {
    creatValidator,
    changeTextValidator,
    changeCostValidator,
    changeDateValidator
} = require('../../helpers/validation.js')

const {
    getAllTasks,
    createNewTask,
    changeTaskText,
    deleteTask,
    deleteAllTask,
    changeTaskCost,
    changeTaskDate
} = require('../controllers/task-controllers.js');

router.get('/tasks', getAllTasks);
router.post('/tasks',creatValidator, createNewTask);
router.delete('/task/:_id', deleteTask);
router.delete('/tasks', deleteAllTask);
router.patch('/task/:_id/text', changeTextValidator, changeTaskText);
router.patch('/task/:_id/cost', changeCostValidator, changeTaskCost),
router.patch('/task/:_id/date', changeDateValidator, changeTaskDate)


module.exports = router;