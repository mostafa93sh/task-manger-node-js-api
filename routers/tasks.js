const express = require("express");
const {
  getAllTasks,
  createTasks,
  deleteTasks,
  getTask,
  updateTasks,
} = require("../controllers/tasks");
const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTasks);
router.get("/:id", getTask);
router.patch("/:id", updateTasks);
router.get("/:id", deleteTasks);

module.exports = router;
