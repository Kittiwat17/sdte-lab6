const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Commit change");
});

module.exports = app;
