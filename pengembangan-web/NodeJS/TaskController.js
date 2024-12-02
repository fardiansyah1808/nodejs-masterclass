const { randomUUID } = require("node:crypto");
const { STATUS_CODES } = require("node:http");

class TaskController {
  #tasks = [
    { id: randomUUID(), name: "Task 1", status: "todo" },
    { id: randomUUID(), name: "Task 2", status: "on-progress" },
    { id: randomUUID(), name: "Task 3", status: "done" },
  ];

  #getTask(res, code, data) {
    const responseBody = JSON.stringify(data);
    res.writeHead(code, {
      "Content-Type": "application/json",
      "Content-Length": responseBody.length,
    });
    res.write(responseBody);
    res.end();
  }

  #whenData(req, res, callback) {
    const chunks = [];
    req.on("data", (data) => {
      chunks.push(data);
    });
    req.on("error", (error) => {
      console.error(error);
      res.writeHead(500, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify({ message: STATUS_CODES[500] }));
    });
    req.on("end", () => {
      const body = Buffer.concat(chunks).toString();
      const decoded = JSON.parse(body);
      callback(decoded);
    });
  }

  #postTask(res, code, data) {
    const responseBody = JSON.stringify(data);
    res.writeHead(code, {
      "Content-Type": "application/json",
      "Content-Length": responseBody.length,
    });
    res.write(responseBody);
    res.end();
  }

  getAllTasks(res) {
    this.#getTask(res, 200, this.#tasks);
  }

  postCreateTask(req, res) {
    this.#whenData(req, res, (data) => {
      const { name, status } = data;
      if (!name || name.length <= 3 || !status || status.length <= 3) {
        this.#postTask(res, 400, {
          status: STATUS_CODES[400],
          message:
            "Title and status is required and must be more than 3 characters",
        });
        return;
      }
      const newTask = { id: randomUUID(), name, status };
      this.#tasks.push(newTask);
      this.#postTask(res, 201, newTask);
    });
  }

  deleteTask(req, res) {
    this.#whenData(req, res, (data) => {
      const { id } = data;
      const task = this.#tasks.find((task) => task.id === id);
      if (!id) {
        this.#getTask(res, 400, {
          status: STATUS_CODES[400],
          message: "Id is required",
        });
        return;
      }
      if (!task) {
        this.#getTask(res, 404, {
          status: STATUS_CODES[404],
          message: "Task not found",
        });
        return;
      }
      this.#tasks = this.#tasks.filter((task) => task.id !== id);
      this.#getTask(res, 200, task);
    });
  }

  putUpdateTask(req, res) {
    this.#whenData(req, res, (data) => {
      const { id, name, status } = data;
      const task = this.#tasks.find((task) => task.id === id);
      if (!task) {
        this.#getTask(res, 404, {
          status: STATUS_CODES[404],
          message: "Task not found",
        });
        return;
      }
      task.name = name;
      task.status = status;
      this.#getTask(res, 200, task);
    });
  }
}

module.exports = TaskController;
