const express = require("express");
const noopServiceWorkerMiddleware = require("..");

const app = express();

app.use(noopServiceWorkerMiddleware());
app.use(noopServiceWorkerMiddleware("/custom-service-worker.js"));

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

module.exports = app;
