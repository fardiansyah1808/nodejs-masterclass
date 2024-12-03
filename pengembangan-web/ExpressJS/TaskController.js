const { randomUUID } = require("node:crypto");
const { STATUS_CODES } = require("node:http");
const TaskRepository = require("./TaskModel");

class TaskController {
  #repo;
  /**
   * constructor for TaskController
   * @param {TaskRepository} taskRepository
   */
  constructor(taskRepository) {
    this.#repo = taskRepository;
  }

  getAllTasks = (req, res) => {
    res.json(this.#repo.getAllTasks()).status(200);
  };

  postCreateTask = (req, res) => {
    const { name } = req.body;
    const newTask = this.#repo.addTask(name);
    res.status(201).json(newTask);
  };

  deleteTask = (req, res) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        status: STATUS_CODES[400],
        message: "Id is required",
      });

      return;
    }
    const { ok, data, message } = this.#repo.removeTask(id);
    if (!ok) {
      res.status(404).json({ status: STATUS_CODES[404], message });

      return;
    }
    res.status(200).json(data);
  };

  putUpdateTask = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const task = this.#repo.updateTask(id, status);
    if (!task) {
      res
        .status(404)
        .json({ status: STATUS_CODES[404], message: "Task not found" });

      return;
    }
    const { ok, data, message } = this.#repo.updateTask(id, status);
    if (!ok) {
      res.status(404).json({ status: STATUS_CODES[404], message });

      return;
    }
    res.status(200).json(data);
  };
}

module.exports = TaskController;
