const { createServer, STATUS_CODES } = require("node:http");
const TaskController = require("./TaskController");

const taskController = new TaskController();

const server = createServer();

server.on("request", async (req, res) => {
  const { method, url, headers } = req;
  console.debug("request received", {
    method,
    url,
    headers: { "Content-Type": headers["content-type"] },
  });
  switch (url) {
    case "/api/v1/tasks":
      switch (method) {
        case "GET":
          taskController.getAllTasks(res);
          return;
        case "POST":
          taskController.postCreateTask(req, res);
          return;
        case "DELETE":
          taskController.deleteTask(req, res);
          return;
        case "PUT":
          taskController.putUpdateTask(req, res);
          return;
        case "PATCH":
          res.writeHead(501, {
            "Content-Type": "application/json",
          });
          res.end();
          return;
        default:
          res.writeHead(405, {
            "Content-Type": "application/json",
          });
          res.write(JSON.stringify({ message: STATUS_CODES[405] }));
          res.end();
          return;
      }
    default:
      break;
  }
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
