const { randomUUID } = require("node:crypto");
const z = require("zod");

const addTaskSchema = z
  .object({
    name: z.string().min(3),
  })
  .required();

const currentStatus = ["todo", "on-progress", "done"];

const updateTaskSchema = z
  .object({
    status: z.enum(currentStatus),
  })
  .required();

class TaskRepository {
  #tasks = [
    { id: randomUUID(), name: "Task 1", status: "todo" },
    { id: randomUUID(), name: "Task 2", status: "on-progress" },
    { id: randomUUID(), name: "Task 3", status: "done" },
  ];

  getAllTasks = () => {
    return this.#tasks;
  };

  addTask = (name) => {
    const newTask = { id: randomUUID(), name, status: "todo" };
    this.#tasks.push(newTask);
    return newTask;
  };

  removeTask = (id) => {
    if (!id) {
      return { ok: false, data: null, message: "Id is required" };
    }
    const targetTask = this.#tasks.find((task) => task.id === id);
    if (!targetTask) {
      return { ok: false, data: null, message: "Task not found" };
    }
    this.#tasks = this.#tasks.filter((task) => task.id !== id);
    return { ok: true, data: targetTask, message: "Task deleted successfully" };
  };

  updateTask = (id, status) => {
    if (!id || !status) {
      return { ok: false, data: null, message: "Id and status is required" };
    }
    const targetTask = this.#tasks.find((task) => task.id === id);
    if (!targetTask) {
      return { ok: false, data: null, message: "Task not found" };
    }
    targetTask.status = status;
    return { ok: true, data: targetTask, message: "Task updated successfully" };
  };
}

module.exports = { TaskRepository, addTaskSchema, updateTaskSchema };
