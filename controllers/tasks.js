const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("ALL ITEMS");
};

const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    console.log(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "bad request" });
  }
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
