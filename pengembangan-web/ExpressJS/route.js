const express = require("express");
const TaskController = require("./TaskController");
const {
  TaskRepository,
  addTaskSchema,
  updateTaskSchema,
} = require("./TaskModel");
const { ZodError } = require("zod");

const taskRepo = new TaskRepository();
const taskController = new TaskController(taskRepo);

const taskRouter = express.Router();

taskRouter.get("/", taskController.getAllTasks);
taskRouter.post(
  "/",
  schemaValidator(addTaskSchema),
  taskController.postCreateTask
);
taskRouter.put(
  "/:id",
  schemaValidator(updateTaskSchema),
  taskController.putUpdateTask
);
taskRouter.delete("/:id", taskController.deleteTask);

function schemaValidator(schema) {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const issues = error.errors.map((issue) => ({
          path: issue.path,
          message: issue.message,
        }));
        res.status(400).json({ code: "Error Validation", issues });
      } else {
        next(error);
      }
    }
  };
}

module.exports = taskRouter;
