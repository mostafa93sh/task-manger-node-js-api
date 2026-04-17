const getAllTasks = (req, res) => {
  res.send("ALL ITEMS");
};

const createTasks = (req, res) => {
  res.send("create new task");
};
const getTask = (req, res) => {
  res.send("get single task");
};
const updateTasks = (req, res) => {
  res.send("update existing task");
};
const deleteTasks = (req, res) => {
  res.send("task is deleted");
};

module.exports = {
  getAllTasks,
  deleteTasks,
  updateTasks,
  createTasks,
  getTask,
};
