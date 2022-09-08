require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8888;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, console.log("Visit http://localhost:" + port));
