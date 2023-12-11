const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Queries");
});

app.get("/op001", (req, res) => {
  res.send("Query 001");
});

app.get("/op002", (req, res) => {
  res.send("Query 002");
});

app.listen(5000, () => {
  console.log("listening on internal Docker port 5000");
});
