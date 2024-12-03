const express = require("express");
const TaskController = require("./TaskController");
const taskRouter = require("./route");
const morgan = require("morgan");

const taskController = new TaskController();

const app = express();
app.use(express.json());

const logger = morgan(
  ":method :url :status :res[content-length] :res[content-type] - :response-time ms"
);

app.use(logger);

app.use("/api/v1/tasks", taskRouter);
app.use("/ping", (req, res) => {
  res.send("pong");
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
