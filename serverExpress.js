const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("api is running ");
});

server.get("/contact", (req, res) => {
  res.send("contact is here  ");
});

server.get("/contact/:id", (req, res) => {
  res.send(`${req.params.id} is here and ${req.query.name}  `);
});

server.listen(3000, () => {
  console.log("=== api is running on port 3000 === ");
});
