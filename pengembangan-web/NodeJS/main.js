const { error } = require("node:console");
const http = require("node:http");

const server = http.createServer();

const htmlHome = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <h1>Homepage</h1>
</body>
</html>
`

const htmlAbout = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About</title>
</head>
<body>
    <h1>About</h1>
</body>
</html>
`

const htmlNotFound = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Not Found</title>
</head>
<body>
    <h1>Not Found</h1>
</body>
</html>
`

server.on("request", async (req, res) => {
    const { method, url, headers } = req;

    switch (url) {
        case "/":
            console.log("Processing request for /");
            await new Promise(resolve => setTimeout(resolve, 5000));
            res.writeHead(200, { "Content-Type": "text/html", "content-length": htmlHome.length });
            res.end(htmlHome);
            console.log("Sent response for /");
            break;
        case "/about":
            res.writeHead(200, { "Content-Type": "text/html", "content-length": htmlAbout.length });
            res.end(htmlAbout);
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/html", "content-length": htmlNotFound.length });
            res.end(htmlNotFound);
            break;
    }
    console.debug('request', { method, url, headers: { "content-type": headers["content-type"] } });
});

const port = process.env.PORT || 8080;

server.listen(port, "localhost", () => {
    console.log(`Server is running on port ${port} `);
});

server.on("close", () => {
    console.log("Server closed successfully");
    process.exit(0);
});

server.on("error", (error) => {
    console.error("Error starting server", error);
    process.exit(1);
});

const SIGINT_SIGNAL = async (signal) => {
    console.log(`Server is shutting down on ${signal}`);
    console.log(`Server is shutting down on ${signal}`);
    await server.close((error) => {
        console.error("Error shutting down server", error);
    });
    console.log(`Server has been shut down on ${signal}`);
};

const SIGTERM_SIGNAL = async (signal) => {
    console.log(`Server is shutting down on ${signal}`);
    await server.close((error) => {
        console.error("Error shutting down server", error);
    });
    console.log(`Server has been shut down on ${signal}`);
};

process.addListener("SIGINT", SIGINT_SIGNAL);
process.addListener("SIGTERM", SIGTERM_SIGNAL);
