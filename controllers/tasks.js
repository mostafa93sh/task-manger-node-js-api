const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
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
  // res.send("create new task");
};
const getTask = async (req, res) => {
  try {
    const id = req.params.id;

    const task = await Task.findOne({ _id: id });
    if (!task) return res.status(404).json({ message: "task not found" });
    res.status(200).json({ task });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
  // res.send("get single task");
};
const updateTasks = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(404).json({ msg: "this task not found" });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({ _id: id });
    // if (task) return res.status(404).json("this task not foun");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTasks,
  deleteTasks,
  updateTasks,
  createTasks,
  getTask,
};
