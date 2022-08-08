const Task = require('../../modul/task.js');

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find();
    res.status(200).send(allTasks);
  } catch (error) {
    res.status(400).send('Task retrieval error');
  }
};

const createNewTask = async (req, res) => {
  try {
    const { text, date, cost } = req.body
    const task = new Task({ text, cost, date });
    const result = await task.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send('Task send error')
  }
};

const deleteTask = async (req, res) => {
  try {
    const _id = req.params._id;
    if (!_id) {
      throw new Error();
    };

    const deleteTask = await Task.deleteOne({ _id });
    res.status(200).send(deleteTask);
  } catch (error) {
    res.status(400).send('Failed delete task')
  }
};


const changeTaskText = async (req, res) => {
  try {
    const { text } = req.body;
    const { _id } = req.params;

    const task = await Task.findOneAndUpdate(
      { _id },
      { $set: { text } },
      { new: true },
    );
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send('Fail to change text');
  }
};

const changeTaskCost = async (req, res) => {
  try {
    const cost = req.body.cost;
    const _id = req.params._id;

    const task = await Task.findOneAndUpdate(
      { _id },
      { $set: { cost } },
      { new: true },
    );
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send('Fail to change cost');
  }
};

const changeTaskDate = async (req, res) => {
  try {
    const date = req.body.date;
    const { _id } = req.params;

    const task = await Task.findOneAndUpdate(
      { _id },
      { $set: { date } },
      { new: true },
    );
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send('Fail to change date');
  }
};


const deleteAllTask = async (req, res) => {
  try {
    const result = await Task.deleteMany({});
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send('fail to delete')
  }
}


module.exports = {
  getAllTasks,
  createNewTask,
  changeTaskText,
  deleteTask,
  deleteAllTask,
  changeTaskCost,
  changeTaskDate
}
